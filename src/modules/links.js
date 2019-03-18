"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileForExtracLinks = exports.regexFilterLinks = exports.filterToFileMd = exports.arrayOfFile = void 0;

var path = require('path');

var fs = require('fs'); // Funcion que retorna una array de archivos que contiene una ruta de un directorio o de un solo archivo.


var arrayOfFile = function arrayOfFile(route) {
  var routeAbsolute = path.resolve(route);
  var newArray = [];

  if (fs.lstatSync(routeAbsolute).isFile() === true) {
    newArray.push(routeAbsolute);
  } else {
    var arrayPath = fs.readdirSync(routeAbsolute);
    arrayPath.forEach(function (file) {
      var arrayOfFileRoute = arrayOfFile(path.join(routeAbsolute, file));
      newArray = newArray.concat(arrayOfFileRoute);
    });
  }

  return newArray;
}; // Funcion que filtra el array de archivos para solo obtener los archivos markdown.


exports.arrayOfFile = arrayOfFile;

var filterToFileMd = function filterToFileMd(router) {
  var arrayOfFilePath = arrayOfFile(router);
  var variableFiltrado = arrayOfFilePath.filter(function (route) {
    return path.extname(route).toLowerCase() === '.md';
  });
  return variableFiltrado;
}; // Funcion que captura los links del contenido de los archivos markdown con el uso de expresiones regulares.


exports.filterToFileMd = filterToFileMd;

var regexFilterLinks = function regexFilterLinks(stringOfContentMd, route) {
  var regex1 = RegExp(/(^|[^!])\[(.*)\]\((.*)\)/gm);
  var arrayOfObjData = [];
  var array1 = regex1.exec(stringOfContentMd);

  while (array1 !== null) {
    var objectData = {
      text: array1[2].slice(0.50),
      href: array1[3],
      file: route
    };
    arrayOfObjData.push(objectData);
    array1 = regex1.exec(stringOfContentMd);
  }

  return arrayOfObjData;
}; // Funcion general que llama a las funciones de filtrado de archivos md y que captura los links de los archivos.


exports.regexFilterLinks = regexFilterLinks;

var readFileForExtracLinks = function readFileForExtracLinks(route) {
  var filterMd = filterToFileMd(route);
  var arrayOfLinks = [];
  filterMd.forEach(function (file) {
    var content = fs.readFileSync(file, 'utf8');
    var arrFileMd = regexFilterLinks(content, route);
    arrayOfLinks = arrayOfLinks.concat(arrFileMd);
  });
  return arrayOfLinks;
};

exports.readFileForExtracLinks = readFileForExtracLinks;