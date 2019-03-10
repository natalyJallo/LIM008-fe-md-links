"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsValidationAndStats = void 0;

var _stats = require("./MODULE/stats");

var _validate = require("./MODULE/validate.js");

var options = {
  validate: false,
  stats: false
};

var optionsValidationAndStats = function optionsValidationAndStats(route, options) {
  var promises = 0;

  if (!options.validate && !options.stats) {
    (0, _validate.validationCorrectsLinks)(route).then(function (resp) {
      resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Text: ").concat(values.text));
      });
    }).catch(function (err) {
      return err;
    });
  } else if (!options.validate && options.stats) {
    promises = Promise.all([(0, _stats.statsLinks)(route), (0, _stats.uniqueStatsLinks)(route)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  } else if (options.validate && !options.stats) {
    (0, _validate.validationCorrectsLinks)(route).then(function (resp) {
      resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Status: ").concat(values.status, "\n StatusText: ").concat(values.message, "\n Text: ").concat(values.text, "\n"));
      });
    }).catch(function (err) {
      return err;
    });
  } else if (options.validate && options.stats) {
    promises = Promise.all([(0, _stats.statsLinks)(route), (0, _stats.uniqueStatsLinks)(route), (0, _stats.brokenStatsLinks)(route)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  }

  ;
  return promises;
};

exports.optionsValidationAndStats = optionsValidationAndStats;
optionsValidationAndStats("C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA", options);