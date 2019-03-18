import { statsFunctionOfLinks, totalstatsLinks, uniqueStatsLinks, brokenStatsLinks } from '../lib/modules/stats.js';
import { validationCorrectsLinks } from '../lib/modules/validate.js';
import { linkSync } from 'fs';
const path = require('path');

const route = path.join(`${process.cwd()}`, '\\test\\PRUEBITA');
const result = [ { text: 'semver',
  href: 'https://semver.org/',
  file: path.join(`${process.cwd()},\\test\\PRUEBITA`),
  status: 200,
  message: 'OK' } ];

describe('statsFunctionOfLinks', () => {
  it('debería ser una función', () => {
    expect(typeof statsFunctionOfLinks).toBe('function');
  });
  it('Debería retornar el conteo de links', (done) => {
    statsFunctionOfLinks(route).then((response) => {
      expect(response).toEqual(result);
      done();
    });
  });
});

describe('totalstatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof totalstatsLinks).toBe('function');
  });
  it('Debería poder calcular el total de links unicos', () => {
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
  it('Debería contar el total de links', (done) => { 
    brokenStatsLinks(route).then((result) => {
      expect(result).toEqual('Broken: 0');
      done();
    });
  });
});