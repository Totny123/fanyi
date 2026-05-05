#!/usr/bin/env node
import { program } from 'commander';
import { translate } from './main.js';

program
  .version('0.0.1')
  .name('fy')
  .usage('<English>')
  .arguments('<English>')
  .action((word) => {
    translate(word);
  });

program.parse(process.argv);
