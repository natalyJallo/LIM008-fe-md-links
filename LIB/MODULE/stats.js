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

export const statsLinks = (route) => {
  const objtStatLinks = response => `Total: ${response.length}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};

// statsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));


export const uniqueStatsLinks = (route) => {
  const objtStatLinks = links => `Unique: ${new Set(links.map(({href}) => href)).size}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};

// uniqueStatsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));

export const brokenStatsLinks = (route) => {
  const objtStatLinks = links => `Broken: ${links.filter(link => link.message === 'Fail').length}`;
  return statsFunctionOfLinks(objtStatLinks, route);
};

// brokenStatsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));