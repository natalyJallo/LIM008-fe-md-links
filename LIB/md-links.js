import {statsLinks, uniqueStatsLinks, brokenStatsLinks} from './module/stats.js';
import {validationCorrectsLinks} from './module/validate.js';
import {readFileForExtracLinks} from './module/links.js';

export const mdLinks = (route, options) => {
  const promise = options.validate
    ? validationCorrectsLinks(route)
    : new Promise((resolve) => resolve(readFileForExtracLinks(route)));
  return promise;
};