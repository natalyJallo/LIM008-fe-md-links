#!/usr/bin/env node
'use strict';
import {mdLinks} from './md-links.js/index.js';
import {totalstatsLinks, uniqueStatsLinks, brokenStatsLinks} from './module/module1/stats.js/index.js';

const argvProcess = process.argv.slice(2);

const path = args[0];

const option = {
  validate: false,
};

const comandLineFunction = (args, options) => {
  if (args.length === 0) {
    console.log('Ingresa una ruta, ejemplo: md-links ./some/example\n');
  } else if (args.length === 1) {
    if (args[0] === '--help') {
      console.log(`\n Uso: \n\n$ md-links <path> <options> \n\n<path> es la ruta del archivo o carpeta a evaluar \n<options> tendrán los valores de:
      --stats o --s, muestra cantidad de links y cantidad de links únicos \n --validate o --v, muestra la ruta absoluta del archivo, texto de referencia, link, estado de link y mensaje de estado(Ok o fail) \n --stats --validate o --s --v, muestra cantidad de links, cantidad de links únicos y cantidad de links rotos\n`);
    } else {
      mdLinks(path, options).then((resp) => {
        resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text.length > 50 ? `${values.text.substring(0, 46)}...` : values.text}`));
      }).catch(err => err);
    } 
  } else if (args.length === 2) {
    if (args[1] === '--validate' || args[1] === '--v') {
      options.validate = true;
      mdLinks(path, options).then((resp) => {
        resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text.length > 50 ? `${values.text.substring(0, 46)}...` : values.text}\n`));
      }).catch(err => err);
    } else if (args[1] === '--stats' || args[1] === '--s') {
      Promise.all([totalstatsLinks(path),
        uniqueStatsLinks(path)
      ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
    } 
  } else if (args.length === 3) {
    if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
      Promise.all([totalstatsLinks(path),
        uniqueStatsLinks(path),
        brokenStatsLinks(path)
      ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
    } else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
      Promise.all([totalstatsLinks(path),
        uniqueStatsLinks(path),
        brokenStatsLinks(path)
      ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
    }
  }
};
comandLineFunction(argvProcess, option);
