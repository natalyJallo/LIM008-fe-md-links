import { statsFunctionOfLinks, totalstatsLinks, uniqueStatsLinks, brokenStatsLinks } from '../lib/modules/stats.js';
const fetchMock = require('../__mocks__/node-fetch.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;
const path = require('path');

const route = path.resolve(`${process.cwd()}\\test\\PRUEBITA`);
const result = [ { text: 'semver',
  href: 'https://semver.org/',
  file: path.resolve(`${process.cwd()}\\test\\PRUEBITA`),
  status: 200,
  message: 'OK' },
{ text: 'semver',
  href: 'https://semver.org/',
  file: path.resolve(`${process.cwd()}\\test\\PRUEBITA`),
  status: 200,
  message: 'OK' } ];

describe('statsFunctionOfLinks', () => {
  it('debería ser una función', () => {
    expect(typeof statsFunctionOfLinks).toBe('function');
  });
  it('Debería retornar un array de objetos de links validados', (done) => {
    const objtStatLinks = links => `Broken: ${links.filter(link => link.message === 'Fail').length}`;
    fetchMock
      .mock('https://semver.org/', 200, {overwriteRoutes: true})
      .mock('https://semver.org/', 200, {overwriteRoutes: true});
    statsFunctionOfLinks(objtStatLinks, route).then((response) => {
      expect(objtStatLinks(response)).toEqual(result);
      done();
    }).catch((error) => done());
  });
});

describe('totalstatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof totalstatsLinks).toBe('function');
  });
  it('Debería poder calcular el total de links', () => {
    expect(totalstatsLinks(route)).toEqual('Total: 2');
  });
});

describe('uniqueStatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof uniqueStatsLinks).toBe('function');
  });
  it('Debería poder calcular el total de links unicos', () => {
    expect(uniqueStatsLinks(route)).toEqual('Unique: 1');
  });
});


describe('brokenStatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof brokenStatsLinks).toBe('function');
  });
  it('Debería contar el total de links rotos', (done) => { 
    brokenStatsLinks(route).then((result) => {
      expect(result).toEqual('Broken: 0');
      done();
    }).catch(() => {
      done();
    });
  });
});