#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../index.js';


program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    
    const { format } = options;
    
    console.log(gendiff(filepath1, filepath2, format));
  });

program.parse(process.argv);
