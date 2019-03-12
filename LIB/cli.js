#!/usr/bin/env node
'use strict';
import {mdLinks} from './md-links.js';

const args = process.argv.slice(2);

const path = args[0];

const options = {
  validate: false,
};

if (args.length === 1) {
  mdLinks(path, options).then((resp) => {
    // console.log(resp);
    resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text}`));
  }).catch(err => err);
}

if (args.length === 2) {
  if (args[1] === '--validate' || args[1] === '--v') {
    options.validate = true;
    mdLinks(path, options).then((resp) => {
      resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text}\n`));
    }).catch(err => err);
  } else if (args[1] === '--stats' || args[2] === '--s') {
    Promise.all([statsLinks(route),
      uniqueStatsLinks(route)
    ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
    console.log(mdLinks(path, option));
  } 
}

if (args.length === 3) {
  if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
    Promise.all([statsLinks(route),
      uniqueStatsLinks(route),
      brokenStatsLinks(route)
    ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
  } else if ((args[1] === '--stats' || args[2] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    Promise.all([statsLinks(route),
      uniqueStatsLinks(route),
      brokenStatsLinks(route)
    ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
  }
}

