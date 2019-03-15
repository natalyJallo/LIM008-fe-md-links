import {validationCorrectsLinks} from './module/module1/validate.js';
import {readFileForExtracLinks} from './module/module1/links.js';

// Funcion que recibe una ruta y la opcion de validar los links o la opcion de mostrar el array de links.
export const mdLinks = (route, options) => {
  const promise = options.validate
    ? validationCorrectsLinks(route)
    : new Promise((resolve) => resolve(readFileForExtracLinks(route)));
  return promise;
};
