import pandas as pd
import numpy as np
import chardet
import logging
import os
import json
import argparse
import h3

def calc_h3(row, level=1):
  return h3.geo_to_h3(row['Latitude'], row['Longitude'], level)

def calc_centroid_lat(row):
  return round(h3.h3_to_geo(row['h3'])[0], 5)

def calc_centroid_lon(row):
  return round(h3.h3_to_geo(row['h3'])[1], 5)

# Warning: mutates the provided DataFrame
def add_h3_index(df, column_name, level=1):
  df[column_name] = df.apply(lambda row: calc_h3(row, level), axis=1)

def add_centroid_lat(df):
  df['latitude'] = df.apply(lambda row: calc_centroid_lat(row), axis=1)

def add_centroid_lon(df):
  df['longitude'] = df.apply(lambda row: calc_centroid_lon(row), axis=1)

def get_charset(filename):
  with open(filename, 'rb') as rawdata:
    result = chardet.detect(rawdata.read(100000))
  return result['encoding']

def main(in_filename, out_filename, overwrite_output=False):
  if not os.path.exists(in_filename):
    logging.error(f'file {in_filename} does not exist')
    return

  if os.path.exists(out_filename) and not overwrite_output:
    logging.error(f'file {out_filename} already exists')
    return
  elif os.path.exists(out_filename):
    logging.warning(f'overwriting output file {out_filename}')

  charset = get_charset(in_filename)
  # programmatically determined charset of 'ascii' fails w/ UnicodeDecodeError but 'cp1252' works
  df = pd.read_csv(in_filename, encoding='cp1252', keep_default_na=False, low_memory=False)

  # remove invalid rows
  df.drop(df[df['Flag'] > 0].index, inplace=True)
  df.drop(df[df['Longitude'] == -999].index, inplace=True)
  df.drop(df[df['Latitude'] == -999].index, inplace=True)

  # remove placeholder values
  # df.replace(to_replace='NA', value='', inplace=True)
  df.replace(to_replace={'ObservationYear': -999}, value=np.nan, inplace=True)
  df.replace(to_replace={'DepthInMeters': -999}, value=np.nan, inplace=True)
  df.replace(to_replace={'Salinity': -999}, value=np.nan, inplace=True)
  df.replace(to_replace={'Temperature': -999}, value=np.nan, inplace=True)
  df.replace(to_replace={'Oxygen': -999}, value=np.nan, inplace=True)

  # add H3 indices
  # Note: column name indicates relative cell resolution, not absolute H3 level
  add_h3_index(df, 'h3_1', level=3)
  add_h3_index(df, 'h3_2', level=4)

  # create new DataFrame initialized with counts per hexbin
  df2 = pd.DataFrame({'counts': df['h3_2'].value_counts().sort_index()})
  # convert index values to column
  df2.reset_index(inplace=True)
  df2.rename(columns = {'index':'h3'}, inplace=True)

  df2 = df2.assign(
    min_depth = df.groupby(['h3_2'])['DepthInMeters'].min().values,
    max_depth = df.groupby(['h3_2'])['DepthInMeters'].max().values,
    salinity = df.groupby(['h3_2'])['Salinity'].median().values,
    min_salinity = df.groupby(['h3_2'])['Salinity'].min().values,
    max_salinity = df.groupby(['h3_2'])['Salinity'].max().values,
    temperature = df.groupby(['h3_2'])['Temperature'].median().values,
    min_temperature = df.groupby(['h3_2'])['Temperature'].min().values,
    max_temperature = df.groupby(['h3_2'])['Temperature'].max().values,
    oxygen = df.groupby(['h3_2'])['Oxygen'].median().values,
    min_oxygen = df.groupby(['h3_2'])['Oxygen'].min().values,
    max_oxygen = df.groupby(['h3_2'])['Oxygen'].max().values
  )

  add_centroid_lat(df2)
  add_centroid_lon(df2)

  # h3_summary.csv
  df2.to_csv(out_filename, header=True, index=False)

if __name__ == "__main__":
  levels = {
    'error': logging.ERROR,
    'warning': logging.WARNING,
    'info': logging.INFO,
    'debug': logging.DEBUG
  }

  # setup command line arguments
  arg_parser = argparse.ArgumentParser(
      description="""summarize select environmental variable by H3 index value"""
  )
  arg_parser.add_argument("--input", required=True, help="path to input file")
  arg_parser.add_argument("--output", required=True, help="path to output file")
  arg_parser.add_argument("--overwrite", action="store_true", help="overwrite output file if it exists")
  arg_parser.add_argument("--loglevel", default="warning", required=False, choices=['debug', 'info', 'warning', 'error'],
                          help="set verbosity of logging")
  args = arg_parser.parse_args()

  logging.basicConfig(level=levels.get(args.loglevel))
  logging.getLogger('chardet').level = logging.ERROR

  main(args.input, args.output, args.overwrite)
