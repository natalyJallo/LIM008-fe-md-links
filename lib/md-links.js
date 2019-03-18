import {validationCorrectsLinks} from './modules/validate.js';
import {readFileForExtracLinks} from './modules/links.js';

const option = {
  validate: true,
};
// Funcion que recibe una ruta y la opcion de validar los links o la opcion de mostrar el array de links.
export const mdLinks = (route, options) => {
  const promise = options.validate
    ? validationCorrectsLinks(route)
    : new Promise((resolve) => resolve(readFileForExtracLinks(route)));
  return promise;
};

console.log(mdLinks('test\\PRUEBITA', option));