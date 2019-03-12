import {validationCorrectsLinks} from './validate.js';

export const statsFunctionOfLinks = (response, route) => {
  return new Promise((resolve, reject) => { 
    const validationoflinks = validationCorrectsLinks(route);
    validationoflinks.then(validLinks => {
      const result = response(validLinks);
      resolve(result);
    }).catch(error => reject(error));
  });
};  

export const totalstatsLinks = (route) => {
  const objtStatLinks = response => `Total: ${response.length}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};

export const uniqueStatsLinks = (route) => {
  const objtStatLinks = links => `Unique: ${new Set(links.map(({href}) => href)).size}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};

export const brokenStatsLinks = (route) => {
  const objtStatLinks = links => `Broken: ${links.filter(link => link.message === 'Fail').length}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};
