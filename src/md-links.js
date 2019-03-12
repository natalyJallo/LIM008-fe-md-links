"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("./module/validate.js");

var _links = require("./module/links.js");

var mdLinks = function mdLinks(route, options) {
  var promise = options.validate ? (0, _validate.validationCorrectsLinks)(route) : new Promise(function (resolve) {
    return resolve((0, _links.readFileForExtracLinks)(route));
  });
  return promise;
};

exports.mdLinks = mdLinks;