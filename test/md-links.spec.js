import {mdLinks} from '../lib/md-links.js';
const fetchMock = require('../__mocks__/node-fetch.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;
const path = require('path');
const route = path.join(`${process.cwd()}`, '\\test\\PRUEBITA');

const option2 = {
  validate: false,
};

const option = {
  validate: true,
};

const result = 'Promise { <pending> }';  
const result2 = `Promise {
    [ { text: 'semver',
        href: 'https://semver.org/',
        file: 'test\\PRUEBITA' },
      { text: 'semver',
        href: 'https://semver.org/',
        file: 'test\\PRUEBITA' } ] }`;

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Debería retornar un array de objetos de links validados', () => {
    expect(mdLinks(route, option)).toEqual(result);
  });
  it.only('Debería retornar un array de objetos de links validados', () => {
    expect(mdLinks(route, option2)).toEqual(result2);
  });
});
  