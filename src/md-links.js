"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("./module/module1/validate.js");

var _links = require("./module/module1/links.js");

// Funcion que recibe una ruta y la opcion de validar los links o la opcion de mostrar el array de links.
var mdLinks = function mdLinks(route, options) {
  var promise = options.validate ? (0, _validate.validationCorrectsLinks)(route) : new Promise(function (resolve) {
    return resolve((0, _links.readFileForExtracLinks)(route));
  });
  return promise;
};

exports.mdLinks = mdLinks;