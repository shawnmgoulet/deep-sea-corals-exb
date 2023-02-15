import pandas as pd
import numpy as np
import chardet
import argparse
import logging
import os
import json


def main(in_filename):
    if not os.path.exists(in_filename):
        logging.error(f'file {in_filename} does not exist')
        return

    charset = get_charset(in_filename)
    # programmatically determined charset of 'ascii' fails w/ UnicodeDecodeError but 'cp1252' works
    df = pd.read_csv(in_filename, encoding='cp1252', keep_default_na=False, low_memory=False)

    print(json.dumps(sorted(df['ScientificName'].unique())))
    # for i in sorted(df['ScientificName'].unique()):
    #     print(i)


def get_charset(filename):
    with open(filename, 'rb') as rawdata:
        result = chardet.detect(rawdata.read(100000))
    return result['encoding']


if __name__ == "__main__":
    levels = {
        'error': logging.ERROR,
        'warning': logging.WARNING,
        'info': logging.INFO,
        'debug': logging.DEBUG
    }

    # setup command line arguments
    arg_parser = argparse.ArgumentParser(
        description="""print out a sort list of unique scientific names"""
    )
    arg_parser.add_argument("--input", required=True, help="path to input file")
    arg_parser.add_argument("--loglevel", default="warning", required=False, choices=['debug', 'info', 'warning', 'error'],
                            help="set verbosity of logging")
    args = arg_parser.parse_args()

    logging.basicConfig(level=levels.get(args.loglevel))
    logging.getLogger('chardet').level = logging.ERROR

    main(args.input)
