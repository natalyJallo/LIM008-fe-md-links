"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objetoDeLinks = void 0;

var path = require('path');

var fs = require('fs');

var converterPathAbsolute = function converterPathAbsolute(pathRelative) {
  var absolute = path.resolve(pathRelative);
  return absolute;
};

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
};

var arrayOfFileOfDirectory = arrayOfFile("C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA");

var filterToFileMd = function filterToFileMd(router) {
  var variableFiltrado = router.filter(function (route) {
    return path.extname(route) === '.md';
  });
  return variableFiltrado;
};

var arrayFilterMd = filterToFileMd(arrayOfFileOfDirectory);

var regexFilterCorrectLinks = function regexFilterCorrectLinks(stringOfContentMd, ruta) {
  var regex1 = RegExp(/^\[(.*)\]\((.+)\)/gm);
  var arrayOfObjData = [];
  var array1 = regex1.exec(stringOfContentMd);

  while (array1 !== null) {
    var objectData = {
      text: array1[1].slice(0, 50),
      href: array1[2],
      file: ruta
    };
    arrayOfObjData.push(objectData);
    array1 = regex1.exec(stringOfContentMd);
  }

  return arrayOfObjData;
};

var readFileForExtracLinks = function readFileForExtracLinks(arrfilemd) {
  var arrayOfLinks = [];
  arrfilemd.forEach(function (element) {
    var readFileContent = fs.readFileSync(element, 'utf8');
    arrayOfLinks = arrayOfLinks.concat(regexFilterCorrectLinks(readFileContent, element));
  });
  return arrayOfLinks;
};

var objetoDeLinks = readFileForExtracLinks(arrayFilterMd); // console.log(expresionRegularQueFiltraSoloLinks(arrayLinksFilter));
// export const objetoDeLinks = regexFilterCorrectLinks(arrayLinksFilter);

exports.objetoDeLinks = objetoDeLinks;