const path = require('path');
const fs = require('fs');

// Funcion que retorna una array de archivos que contiene una ruta de un directorio o de un solo archivo.
export const arrayOfFile = (route) => {
  const routeAbsolute = path.resolve(route);
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

// Funcion que filtra el array de archivos para solo obtener los archivos markdown.
export const filterToFileMd = (router) => {
  const arrayOfFilePath = arrayOfFile(router);
  const variableFiltrado = arrayOfFilePath.filter(route => (path.extname(route)).toLowerCase() === '.md');
  return variableFiltrado;
};

// Funcion que captura los links del contenido de los archivos markdown con el uso de expresiones regulares.
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


// Funcion general que llama a las funciones de filtrado de archivos md y que captura los links de los archivos.
export const readFileForExtracLinks = (route) => {
  const filterMd = filterToFileMd(route);
  let arrayOfLinks = [];
  filterMd.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const arrFileMd = regexFilterLinks(content, file);
    arrayOfLinks = arrayOfLinks.concat(arrFileMd);
  });
  return arrayOfLinks ;
};

