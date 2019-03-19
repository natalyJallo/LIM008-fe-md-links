import {validationCorrectsLinks} from './validate.js';
import {readFileForExtracLinks} from './links.js';

// Funcion que calcula el total de links.
export const totalstatsLinks = (route) => {
  const arrayObjtLinks = readFileForExtracLinks(route);
  const objtStatLinks = arrayObjtLinks.length;
  return `Total: ${objtStatLinks}`;
};

// Funcion que calcula el total de links unicos.
export const uniqueStatsLinks = (route) => {
  const arrayObjtLinks = readFileForExtracLinks(route);
  const objtStatLinks = new Set(arrayObjtLinks.map(({href}) => href)).size;
  return `Unique: ${objtStatLinks}`;
};

// Funcion que retorna el resultado despues de validar los links.
export const statsFunctionOfLinks = (response, route) => {
  return new Promise((resolve, reject) => { 
    const validationoflinks = validationCorrectsLinks(route);
    validationoflinks.then(validLinks => {
      const result = response(validLinks);
      resolve(result);
    }).catch(error => reject(error));
  });
};  

// Funcion que calcula el total de links rotos.
export const brokenStatsLinks = (route) => {
  const objtStatLinks = links => `Broken: ${links.filter(link => link.message === 'Fail').length}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};