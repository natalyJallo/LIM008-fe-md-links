"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationCorrectsLinks = void 0;

var _links = require("./links.js");

var fetch = require('node-fetch');

var validationCorrectsLinks = function validationCorrectsLinks(route) {
  var walkArrayObjectLink = (0, _links.readFileForExtracLinks)(route);
  var arrayPromises = walkArrayObjectLink.map(function (links) {
    return new Promise(function (resolve, reject) {
      fetch(links.href).then(function (response) {
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
        return reject(error);
      });
    });
  });
  return Promise.all(arrayPromises);
}; // validationCorrectsLinks('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA').then(result => console.log(result));


exports.validationCorrectsLinks = validationCorrectsLinks;