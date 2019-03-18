"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationCorrectsLinks = void 0;

var _links = require("./links.js");

var fetch = require('node-fetch'); // Funcion que valida los links correctos y retorna una promesa.


var validationCorrectsLinks = function validationCorrectsLinks(route) {
  var walkArrayObjectLink = (0, _links.readFileForExtracLinks)(route);
  var arrayPromises = walkArrayObjectLink.map(function (links) {
    return new Promise(function (resolve, reject) {
      console.log(fetch(links.href)).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.message = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.message = 'Fail';
          resolve(links);
        }
      }).catch(function (error) {
        links.status = 'URL Invalida';
        links.message = 'Fail';
        resolve(links);
      });
    });
  });
  return Promise.all(arrayPromises);
};

exports.validationCorrectsLinks = validationCorrectsLinks;
validationCorrectsLinks('test\\PRUEBA2').then(function (resp) {
  return console.log(resp);
}).catch(function (error) {
  return console.log(error);
});