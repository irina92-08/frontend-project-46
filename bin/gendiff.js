#!/usr/bin/env node

import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1> <filepath2>');

program.parse();
