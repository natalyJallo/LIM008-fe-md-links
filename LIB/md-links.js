import {statsLinks, uniqueStatsLinks, brokenStatsLinks} from './module/stats.js';
import {validationCorrectsLinks} from './module/validate.js';
import {readFileForExtracLinks} from './module/links.js';

const options = {
  validate: false,
};

export const mdLinks = (route, options) => {
  const promise = options.validate
    ? validationCorrectsLinks(route)
    : readFileForExtracLinks(route);
};
// mdLinks('test\\PRUEBITA', options);

// optionsValidationAndStats('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA', options);

// export const mdLinks = (route, options) => {
//   let promises = 0;
//   if (!options.validate && !options.stats) {
//     validationCorrectsLinks(route)
//       .then((resp) => {
//         resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text}`));
//       }).catch(err => err);
//   } else if (!options.validate && options.stats) {
//     promises = Promise.all([
//       statsLinks(route),
//       uniqueStatsLinks(route)
//     ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
//   } else if (options.validate && !options.stats) {
//     validationCorrectsLinks(route)
//       .then((resp) => {
//         resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text}\n`));
//       }).catch(err => err);
//   } else if (options.validate && options.stats) {
//     promises = Promise.all([
//       statsLinks(route),
//       uniqueStatsLinks(route),
//       brokenStatsLinks(route)
//     ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
//   };
//   return promises;
// };