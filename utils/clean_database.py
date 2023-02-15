import pandas as pd
import numpy as np
import chardet
import argparse
import logging
import os
import h3

COLS_TO_KEEP = [
    'DatasetID', 'CatalogNumber', 'SampleID', 'ImageURL', 'HighlightImageURL', 'ScientificName',
    'VerbatimScientificName', 'VernacularNameCategory', 'TaxonRank', 'Phylum', 'Class', 'Order', 'Family', 'Genus',
    'Synonyms', 'Ocean', 'LargeMarineEcosystem', 'FishCouncilRegion', 'Locality', 'Latitude', 'Longitude',
    'DepthInMeters', 'ObservationDate', 'ObservationYear', 'SurveyID', 'Vessel', 'PI', 'EventID', 'SamplingEquipment',
    'DataProvider', 'gisMEOW']


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
    # df = pd.read_csv(in_filename, encoding=charset, keep_default_na=False, low_memory=False)

    # Must be done before dropping columns. Remove all flagged records as they are not for public consumption
    df.drop(df[df['Flag'] > 0].index, inplace=True)

    # drop unneeded columns. assumes COLS_TO_KEEP is a subset of all columns
    cols_to_drop = set(df.columns.values) - set(COLS_TO_KEEP)
    df.drop(columns=cols_to_drop, inplace=True)

    # DataFrame modified in place to save memory
    remove_placeholders(df)

    # add H3 indexes
    add_h3_index(df, 'h3_1', 3)
    add_h3_index(df, 'h3_2', 4)

    # map categorical values to ints
    # substitute_ocean_values(df)
    # substitute_fmc_values(df)
    # substitute_lme_values(df)
    # substitute_meow_values(df)

    # write out cleaned up data
    df.to_csv(out_filename, header=True, index=False)


def calc_h3(row, level=1):
    return h3.geo_to_h3(row['Latitude'], row['Longitude'], level)


def get_charset(filename):
    with open(filename, 'rb') as rawdata:
        result = chardet.detect(rawdata.read(100000))
    return result['encoding']


# WARNING: all the following functions mutate the provided DataFrame
def add_h3_index(df, column_name, level=1):
    df[column_name] = df.apply(lambda row: calc_h3(row, level), axis=1)


def remove_records_without_geocoords(df):
    df.drop(df[df['Longitude'] == -999].index, inplace=True)
    df.drop(df[df['Latitude'] == -999].index, inplace=True)


def substitute_ocean_values(df):
    ocean_lut = {value: i for i, value in enumerate(np.sort(df['Ocean'].unique()))}
    df['Ocean'] = df['Ocean'].map(ocean_lut)
    logging.info('Ocean codes:')
    logging.info(ocean_lut)


def substitute_fmc_values(df):
    fmc_lut = {value: i for i, value in enumerate(np.sort(df['FishCouncilRegion'].unique()))}
    df['FishCouncilRegion'] = df['FishCouncilRegion'].map(fmc_lut)
    logging.info('FishCouncilRegion codes:')
    logging.info(fmc_lut)


def substitute_lme_values(df):
    lme_lut = {value: i for i, value in enumerate(np.sort(df['LargeMarineEcosystem'].unique()))}
    df['LargeMarineEcosystem'] = df['LargeMarineEcosystem'].map(lme_lut)
    logging.info('LargeMarineEcosystem codes:')
    logging.info(lme_lut)


def substitute_meow_values(df):
    meow_lut = {value: i for i, value in enumerate(np.sort(df['gisMEOW'].unique()))}
    df['gisMEOW'] = df['gisMEOW'].map(meow_lut)
    logging.info('MEOW codes:')
    logging.info(meow_lut)


# substitute empty strings for 'NA', -999 values
def remove_placeholders(df):
    # removes "NA" in all columns
    df.replace(to_replace='NA', value='', inplace=True)
    df.replace(to_replace={'ObservationYear': -999}, value='', inplace=True)
    df.replace(to_replace={'DepthInMeters': -999}, value='', inplace=True)


if __name__ == "__main__":
    levels = {
        'error': logging.ERROR,
        'warning': logging.WARNING,
        'info': logging.INFO,
        'debug': logging.DEBUG
    }

    # setup command line arguments
    arg_parser = argparse.ArgumentParser(
        description="""clean and prepare DSCRTP datafile for publishing as hosted Feature Layer"""
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
