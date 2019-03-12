"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _stats = require("./module/stats.js");

var _validate = require("./module/validate.js");

var _links = require("./module/links.js");

// const options = {
//   validate: false,
// };
var mdLinks = function mdLinks(route, options) {
  var promise = options.validate ? (0, _validate.validationCorrectsLinks)(route) : new Promise(function (resolve) {
    return resolve((0, _links.readFileForExtracLinks)(route));
  });
  return promise;
}; // mdLinks('test\\PRUEBITA', options).then((res) => console.log(res));
// optionsValidationAndStats('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA', options);
// export const mdLinks = (route, options) => {
//   let promises = 0;
//   if (!options.validate && !options.stats) {
//     validationCorrectsLinks(route)
//       .then((resp) => {
//         resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text}`));
//       }).catch(err => err);
//   } else if (!options.validate && options.stats) {
//     promises = Promise.all([
//       statsLinks(route),
//       uniqueStatsLinks(route)
//     ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
//   } else if (options.validate && !options.stats) {
//     validationCorrectsLinks(route)
//       .then((resp) => {
//         resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text}\n`));
//       }).catch(err => err);
//   } else if (options.validate && options.stats) {
//     promises = Promise.all([
//       statsLinks(route),
//       uniqueStatsLinks(route),
//       brokenStatsLinks(route)
//     ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
//   };
//   return promises;
// };


exports.mdLinks = mdLinks;