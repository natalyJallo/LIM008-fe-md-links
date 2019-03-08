const path = require('path');
const fs = require('fs');

const converterPathAbsolute = (pathRelative) => {
  const absolute = path.resolve(pathRelative);
  return absolute;
};

const arrayOfFile = (route) => {
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

const arrayOfFileOfDirectory = arrayOfFile('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA');


const filterToFileMd = (router) => {
  const variableFiltrado = router.filter(route => path.extname(route) === '.md');
  return variableFiltrado;
};

const arrayFilterMd = filterToFileMd(arrayOfFileOfDirectory);

const regexFilterCorrectLinks = (stringOfContentMd, ruta) => {
  const regex1 = RegExp(/^\[(.*)\]\((.+)\)/gm);
  const arrayOfObjData = [];
  let array1 = regex1.exec(stringOfContentMd);
  while (array1 !== null) {
    const objectData = {
      text: array1[1].slice(0, 50),
      href: array1[2],
      file: ruta
    };
    arrayOfObjData.push(objectData);
    array1 = regex1.exec(stringOfContentMd);
  }
  return arrayOfObjData;
};

const readFileForExtracLinks = (arrfilemd) => {
  let arrayOfLinks = [];
  arrfilemd.forEach((element) => {
    const readFileContent = fs.readFileSync(element, 'utf8');
    arrayOfLinks = arrayOfLinks.concat(regexFilterCorrectLinks(readFileContent, element));
  });
  return arrayOfLinks ;
};

export const objetoDeLinks = readFileForExtracLinks(arrayFilterMd);


// console.log(expresionRegularQueFiltraSoloLinks(arrayLinksFilter));
// export const objetoDeLinks = regexFilterCorrectLinks(arrayLinksFilter);
