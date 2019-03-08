"use strict";

var _validate = require("./validate.js");

var statsFunctionOfLinks = function statsFunctionOfLinks(response, array) {
  return new Promise(function (resolve, reject) {
    var validationoflinks = (0, _validate.validationCorrectsLinks)(array);
    validationoflinks.then(function (validLinks) {
      console.log(validLinks);
      var result = response(validLinks);
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
};

var statsLinks = function statsLinks(array) {
  var objtStatLinks = function objtStatLinks(response) {
    return response.length;
  };

  return statsFunctionOfLinks(objtStatLinks, array);
}; // statsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));


var uniqueStatsLinks = function uniqueStatsLinks(route) {
  var objtStatLinks = function objtStatLinks(links) {
    return new Set(links.map(function (_ref) {
      var href = _ref.href;
      return href;
    })).size;
  };

  return statsFunctionOfLinks(objtStatLinks, route);
};

uniqueStatsLinks([{
  text: 'semver',
  href: 'https://semver.org/',
  file: "C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md"
}]).then(function (resp) {
  return console.log(resp);
}).catch(function (error) {
  return console.log(error);
});

var brokenStatsLinks = function brokenStatsLinks(route) {
  var objtStatLinks = function objtStatLinks(links) {
    return links.filter(function (link) {
      return link.message === 'Fail';
    }).length;
  };

  return statsFunctionOfLinks(objtStatLinks, route);
}; // brokenStatsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));