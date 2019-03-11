"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileForExtracLinks = exports.regexFilterLinks = exports.filterToFileMd = exports.arrayOfFile = exports.converterPathAbsolute = void 0;

var path = require('path');

var fs = require('fs');

var converterPathAbsolute = function converterPathAbsolute(pathRelative) {
  var absolute = path.resolve(pathRelative);
  return absolute;
};

exports.converterPathAbsolute = converterPathAbsolute;

var arrayOfFile = function arrayOfFile(route) {
  var newArray = [];

  if (fs.lstatSync(route).isFile() === true) {
    newArray.push(route);
  } else {
    var arrayPath = fs.readdirSync(route);
    arrayPath.forEach(function (file) {
      var arrayOfFileRoute = arrayOfFile(path.join(route, file));
      newArray = newArray.concat(arrayOfFileRoute);
    });
  }

  return newArray;
}; // console.log(arrayOfFile('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA'));


exports.arrayOfFile = arrayOfFile;

var filterToFileMd = function filterToFileMd(router) {
  var arrayOfFilePath = arrayOfFile(router);
  var variableFiltrado = arrayOfFilePath.filter(function (route) {
    return path.extname(route) === '.md';
  });
  return variableFiltrado;
};

exports.filterToFileMd = filterToFileMd;

var regexFilterLinks = function regexFilterLinks(stringOfContentMd, route) {
  var regex1 = RegExp(/(^|[^!])\[(.*)\]\((.*)\)/gm);
  var arrayOfObjData = [];
  var array1 = regex1.exec(stringOfContentMd); // console.log(array1);

  while (array1 !== null) {
    var objectData = {
      text: array1[2].slice(0.50),
      href: array1[3],
      file: route
    }; // console.log(objectData);

    arrayOfObjData.push(objectData);
    array1 = regex1.exec(stringOfContentMd);
  }

  return arrayOfObjData;
};

exports.regexFilterLinks = regexFilterLinks;

var readFileForExtracLinks = function readFileForExtracLinks(route) {
  var filterMd = filterToFileMd(route);
  var arrayOfLinks = [];
  filterMd.forEach(function (file) {
    var content = fs.readFileSync(file, 'utf8');
    var arrFileMd = regexFilterLinks(content, route); // console.log(arrFileMd);

    arrayOfLinks = arrayOfLinks.concat(arrFileMd);
  });
  return arrayOfLinks;
}; // console.log(readFileForExtracLinks('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA'));


exports.readFileForExtracLinks = readFileForExtracLinks;