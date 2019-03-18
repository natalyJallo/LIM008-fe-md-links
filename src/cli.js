#!/usr/bin/env node
'use strict';

var _mdLinks = require("./md-links.js");

var _stats = require("./modules/stats.js");

var argvProcess = process.argv.slice(2);
var path = argvProcess[0]; // const option = {
//   validate: false,
// };

var comandLineFunction = function comandLineFunction(args, options) {
  if (args.length === 0) {
    console.log('Ingresa una ruta, ejemplo: md-links ./some/example\n');
  } else if (args.length === 1) {
    if (args[0] === '--help') {
      console.log("\n Uso: \n\n$ md-links <path> <options> \n\n<path> es la ruta del archivo o carpeta a evaluar \n<options> tendr\xE1n los valores de:\n      --stats o --s, muestra cantidad de links y cantidad de links \xFAnicos \n --validate o --v, muestra la ruta absoluta del archivo, texto de referencia, link, estado de link y mensaje de estado(Ok o fail) \n --stats --validate o --s --v, muestra cantidad de links, cantidad de links \xFAnicos y cantidad de links rotos\n");
    } else {
      (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
        resp.forEach(function (values) {
          return console.log("".concat(values.file, " ").concat(values.href, " ").concat(values.text.length > 50 ? "".concat(values.text.substring(0, 46), "...") : values.text));
        });
      }).catch(function (err) {
        return err;
      });
    }
  } else if (args.length === 2) {
    if (args[1] === '--validate' || args[1] === '--v') {
      options.validate = true;
      (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
        resp.forEach(function (values) {
          return console.log("".concat(values.file, " ").concat(values.href, " ").concat(values.message, " ").concat(values.status, " ").concat(values.text.length > 50 ? "".concat(values.text.substring(0, 46), "...") : values.text));
        });
      }).catch(function (err) {
        return err;
      });
    } else if (args[1] === '--stats' || args[1] === '--s') {
      Promise.all([(0, _stats.totalstatsLinks)(path), (0, _stats.uniqueStatsLinks)(path)]).then(function (resp) {
        return resp.forEach(function (values) {
          return console.log(values);
        });
      }).catch(function (err) {
        return err;
      });
    }
  } else if (args.length === 3) {
    if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
      Promise.all([(0, _stats.totalstatsLinks)(path), (0, _stats.uniqueStatsLinks)(path), (0, _stats.brokenStatsLinks)(path)]).then(function (resp) {
        return resp.forEach(function (values) {
          return console.log(values);
        });
      }).catch(function (err) {
        return err;
      });
    } else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
      Promise.all([(0, _stats.totalstatsLinks)(path), (0, _stats.uniqueStatsLinks)(path), (0, _stats.brokenStatsLinks)(path)]).then(function (resp) {
        return resp.forEach(function (values) {
          return console.log(values);
        });
      }).catch(function (err) {
        return err;
      });
    }
  }
};

comandLineFunction(argvProcess, option);