"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenStatsLinks = exports.uniqueStatsLinks = exports.totalstatsLinks = exports.statsFunctionOfLinks = void 0;

var _validate = require("./validate.js");

var statsFunctionOfLinks = function statsFunctionOfLinks(response, route) {
  return new Promise(function (resolve, reject) {
    var validationoflinks = (0, _validate.validationCorrectsLinks)(route);
    validationoflinks.then(function (validLinks) {
      var result = response(validLinks);
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
};

exports.statsFunctionOfLinks = statsFunctionOfLinks;

var totalstatsLinks = function totalstatsLinks(route) {
  var objtStatLinks = function objtStatLinks(response) {
    return "Total: ".concat(response.length);
  };

  return statsFunctionOfLinks(objtStatLinks, route);
}; // console.log(totalstatsLinks('test\\PRUEBITA'))
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));


exports.totalstatsLinks = totalstatsLinks;

var uniqueStatsLinks = function uniqueStatsLinks(route) {
  var objtStatLinks = function objtStatLinks(links) {
    return "Unique: ".concat(new Set(links.map(function (_ref) {
      var href = _ref.href;
      return href;
    })).size);
  };

  return statsFunctionOfLinks(objtStatLinks, route);
}; // uniqueStatsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));


exports.uniqueStatsLinks = uniqueStatsLinks;

var brokenStatsLinks = function brokenStatsLinks(route) {
  var objtStatLinks = function objtStatLinks(links) {
    return "Broken: ".concat(links.filter(function (link) {
      return link.message === 'Fail';
    }).length);
  };

  return statsFunctionOfLinks(objtStatLinks, route);
}; // brokenStatsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));


exports.brokenStatsLinks = brokenStatsLinks;