"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenStatsLinks = exports.statsFunctionOfLinks = exports.uniqueStatsLinks = exports.totalstatsLinks = void 0;

var _validate = require("./validate.js");

var _links = require("./links.js");

// Funcion que calcula el total de links.
var totalstatsLinks = function totalstatsLinks(route) {
  var arrayObjtLinks = (0, _links.readFileForExtracLinks)(route);
  var objtStatLinks = arrayObjtLinks.length;
  return "Total: ".concat(objtStatLinks);
}; // Funcion que calcula el total de links unicos.


exports.totalstatsLinks = totalstatsLinks;

var uniqueStatsLinks = function uniqueStatsLinks(route) {
  var arrayObjtLinks = (0, _links.readFileForExtracLinks)(route);
  var objtStatLinks = new Set(arrayObjtLinks.map(function (_ref) {
    var href = _ref.href;
    return href;
  })).size;
  return "Unique: ".concat(objtStatLinks);
}; // Funcion que retorna el resultado despues de validar los links.


exports.uniqueStatsLinks = uniqueStatsLinks;

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
}; // Funcion que calcula el total de links rotos.


exports.statsFunctionOfLinks = statsFunctionOfLinks;

var brokenStatsLinks = function brokenStatsLinks(route) {
  var objtStatLinks = function objtStatLinks(links) {
    return "Broken: ".concat(links.filter(function (link) {
      return link.message === 'Fail';
    }).length);
  };

  return statsFunctionOfLinks(objtStatLinks, route);
};

exports.brokenStatsLinks = brokenStatsLinks;