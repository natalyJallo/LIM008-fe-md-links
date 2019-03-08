import {validationCorrectsLinks} from './validate.js';

const statsFunctionOfLinks = (response, array) => {
  return new Promise((resolve, reject) => { 
    const validationoflinks = validationCorrectsLinks(array);
    validationoflinks.then(validLinks => {
      console.log(validLinks);
      const result = response(validLinks);
      resolve(result);
    }).catch(error => reject(error));
  });
};

const statsLinks = (array) => {
  const objtStatLinks = response => response.length;
  return statsFunctionOfLinks(objtStatLinks, array);
};

// statsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));


const uniqueStatsLinks = (route) => {
  const objtStatLinks = links => new Set(links.map(({href}) => href)).size;
  return statsFunctionOfLinks(objtStatLinks, route);
};

uniqueStatsLinks([ { text: 'semver',
  href: 'https://semver.org/',
  file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
  .then(resp => console.log(resp))
  .catch(error => console.log(error));

const brokenStatsLinks = (route) => {
  const objtStatLinks = links => links.filter(link => link.message === 'Fail').length;
  return statsFunctionOfLinks(objtStatLinks, route);
};

// brokenStatsLinks([ { text: 'semver',
//   href: 'https://semver.org/',
//   file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ])
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error));