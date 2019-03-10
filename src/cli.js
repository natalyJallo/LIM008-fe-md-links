#!/usr/bin/env node
'use strict';

var index = require('LIB/md-links.js');

var args = process.argv.slice(2);
var path = args[0];
var option = {
  validate: false,
  stats: false
};

if (args.length === 1) {
  optionsValidationAndStats(path, option);
}

if (args.length === 2) {
  if (args[1] === '--validate' || args[1] === '--v') {
    option.validate = true;
    optionsValidationAndStats(path, option);
  } else if (args[1] === '--stats' || args[2] === '--s') {
    option.stats = true;
    optionsValidationAndStats(path, option);
  }
}

if (args.length === 3) {
  if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
    option.validate = true;
    option.stats = true;
    optionsValidationAndStats(path, option);
  } else if ((args[1] === '--stats' || args[2] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    option.validate = true;
    option.stats = true;
    optionsValidationAndStats(path, option);
  }
}