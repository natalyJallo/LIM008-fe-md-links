"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationCorrectsLinks = void 0;

var fetch = require('node-fetch'); // import {objetoDeLinks} from './links.js';


var validationCorrectsLinks = function validationCorrectsLinks(arrayObjectLinks) {
  var walkArrayObjectLink = arrayObjectLinks.map(function (links) {
    return new Promise(function (resolve, reject) {
      fetch(links.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.message = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.message = 'Fail';
          resolve(links);
        }
      }).catch(function (error) {
        return reject(error);
      });
    });
  });
  return Promise.all(walkArrayObjectLink);
}; // const validationCorrectsLinks = ({text, href}) => fetch(href)
//   .then(({status, statusText}) => ({file, href, statusText, status, text}))
//   .catch(() => ({status: 400, statusText: 'Fail'}));
// const statsFunctionOfLinks = (response, array) => {
//     new Promise((resolve, reject) => { 
//       const validationoflinks = validationCorrectsLinks(array);
//       validationoflinks.then(validLinks => {
//         const result = response(validLinks);
//         resolve(result);
//       }).catch(error => reject(error));
//     });
//   };
//   const statsLinks = (route) => {
//     const objtStatLinks = response => response.length;
//     return statsFunctionOfLinks(objtStatLinks, route);
//   };
//   statsLinks('')
//       .then(resp => console.log(resp))
//       .catch(error => console.log(error))
//   const uniqueStatsLinks = (route) => {
//     const objtStatLinks = links => new Set(links.map(({href}) => href)).size;
//     return statsFunctionOfLinks(objtStatLinks, route);
//   };
//   const brokenStatsLinks = (route) => {
//     const objtStatLinks = links => links.filter(link => link.message === 'Fail').length;
//     return statsFunctionOfLinks(objtStatLinks, route);
//   };


exports.validationCorrectsLinks = validationCorrectsLinks;