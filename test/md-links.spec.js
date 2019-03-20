import {mdLinks} from '../lib/md-links.js';
const fetchMock = require('../__mocks__/node-fetch.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;
const path = require('path');
const route = path.resolve(`${process.cwd()}\\test\\PRUEBITA`);

const option = {
  validate: true,
};
const option2 = {
  validate: false,
};

const result = [ { text: 'semver',
  href: 'https://semver.org/',
  file:
path.resolve(`${process.cwd()}\\test\\PRUEBITA`),
  status: 200,
  message: 'OK' },
{ text: 'semver',
  href: 'https://semver.org/',
  file:
path.resolve(`${process.cwd()}\\test\\PRUEBITA`),
  status: 200,
  message: 'OK' }];  
const result2 = [ { text: 'semver',
  href: 'https://semver.org/',
  file:
path.resolve(`${process.cwd()}\\test\\PRUEBITA`) },
{ text: 'semver',
  href: 'https://semver.org/',
  file:
path.resolve(`${process.cwd()}\\test\\PRUEBITA`) } ];

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Debería retornar un array de objetos de links validados', (done) => {
    mdLinks(route, option).then((response) => {
      expect(response).toEqual(result);
      done();
    });
  });
  it('Debería retornar un array de objetos de links validados', (done) => {
    mdLinks(route, option2).then((response) => {
      expect(response).toEqual(result2);
      done();
    });
  });
});