const path = require('path');
const fs = require('fs');

export const converterPathAbsolute = (pathRelative) => {
  const absolute = path.resolve(pathRelative);
  return absolute;
};

export const arrayOfFile = (route) => {
  let newArray = [];
  if (fs.lstatSync(route).isFile() === true) {
    newArray.push(route);
  } else {
    const arrayPath = fs.readdirSync(route);
    arrayPath.forEach((file) => {
      const arrayOfFileRoute = arrayOfFile(path.join(route, file));
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
  const regex1 = /(^|[^!])\[(.*)\]\((.*)\)/gm;
  let arrayOfObjData = [];
  let array1 = regex1.exec(stringOfContentMd);
  while (array1 !== null) {
    const objectData = {
      text: array1[2].slice(0, 50),
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
    // console.log(arrFileMd);
    arrayOfLinks = arrayOfLinks.concat(arrFileMd);
  });
  return arrayOfLinks ;
};

// console.log(readFileForExtracLinks('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA'));

