#!/usr/bin/env node
'use strict';

var _mdLinks = require("./md-links.js");

var _stats = require("./module/stats.js");

var args = process.argv.slice(2);
var path = args[0];
var options = {
  validate: false
};

if (args.length === 0) {
  console.log('Ingresa una ruta, ejemplo: md-links ./some/example\n');
}

var helpMe = function helpMe() {
  console.log("\n Uso: \n\n$ md-links <path> <options> \n\n<path> es la ruta del archivo o carpeta a evaluar \n<options> tendr\xE1n los valores de:\n --stats o --s, muestra cantidad de links y cantidad de links \xFAnicos \n --validate o --v, muestra la ruta absoluta del archivo, texto de referencia, link, estado de link y mensaje de estado(Ok o fail) \n --stats --validate o --s --v, muestra cantidad de links, cantidad de links \xFAnicos y cantidad de links rotos\n");
};

if (args.length === 1) {
  if (args[1] === '--help') {
    helpMe();
  } else {
    (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
      resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Text: ").concat(values.text));
      });
    }).catch(function (err) {
      return err;
    });
  }
}

if (args.length === 2) {
  if (args[1] === '--validate' || args[1] === '--v') {
    options.validate = true;
    (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
      resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Status: ").concat(values.status, "\n StatusText: ").concat(values.message, "\n Text: ").concat(values.text, "\n"));
      });
    }).catch(function (err) {
      return err;
    });
  } else if (args[1] === '--stats' || args[2] === '--s') {
    Promise.all([(0, _stats.totalstatsLinks)(path), (0, _stats.uniqueStatsLinks)(path)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  }
}

if (args.length === 3) {
  if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
    Promise.all([(0, _stats.totalstatsLinks)(path), (0, _stats.uniqueStatsLinks)(path), (0, _stats.brokenStatsLinks)(path)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  } else if ((args[1] === '--stats' || args[2] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    Promise.all([(0, _stats.totalstatsLinks)(path), (0, _stats.uniqueStatsLinks)(path), (0, _stats.brokenStatsLinks)(path)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  }
}