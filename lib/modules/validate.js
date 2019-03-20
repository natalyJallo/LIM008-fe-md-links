import {readFileForExtracLinks} from './links.js';
const fetch = require('node-fetch');

// Funcion que valida los links correctos y retorna una promesa.
export const validationCorrectsLinks = (route) => {
  const walkArrayObjectLink = readFileForExtracLinks(route);
  const arrayPromises = walkArrayObjectLink.map(links => new Promise((resolve, reject) => {
    fetch(links.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.message = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.message = 'Fail';
          resolve(links);
        }
      }).catch(error => {
        links.status = 'URL Invalida';
        links.message = 'Fail';
        reject(links);
      });
  }));
  return Promise.all(arrayPromises);
};
