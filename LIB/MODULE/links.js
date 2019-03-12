const path = require('path');
const fs = require('fs');

export const converterPathAbsolute = (pathRelative) => {
  const absolute = path.resolve(pathRelative);
  return absolute;
};

export const arrayOfFile = (route) => {
  const routeAbsolute = converterPathAbsolute(route);
  let newArray = [];
  if (fs.lstatSync(routeAbsolute).isFile() === true) {
    newArray.push(routeAbsolute);
  } else {
    const arrayPath = fs.readdirSync(routeAbsolute);
    arrayPath.forEach((file) => {
      const arrayOfFileRoute = arrayOfFile(path.join(routeAbsolute, file));
      newArray = newArray.concat(arrayOfFileRoute);
    });
  }
  return newArray;
};

export const filterToFileMd = (router) => {
  const arrayOfFilePath = arrayOfFile(router);
  const variableFiltrado = arrayOfFilePath.filter(route => path.extname(route) === '.md');
  return variableFiltrado;
};

export const regexFilterLinks = (stringOfContentMd, route) => {
  const regex1 = RegExp(/(^|[^!])\[(.*)\]\((.*)\)/gm);
  let arrayOfObjData = [];
  let array1 = regex1.exec(stringOfContentMd);
  while (array1 !== null) {
    const objectData = {
      text: array1[2].slice(0.50),
      href: array1[3],
      file: route
    };
    arrayOfObjData.push(objectData);
    array1 = regex1.exec(stringOfContentMd);
  }
  return arrayOfObjData;
};

export const readFileForExtracLinks = (route) => {
  const filterMd = filterToFileMd(route);
  let arrayOfLinks = [];
  filterMd.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const arrFileMd = regexFilterLinks(content, route);
    arrayOfLinks = arrayOfLinks.concat(arrFileMd);
  });
  return arrayOfLinks ;
};

