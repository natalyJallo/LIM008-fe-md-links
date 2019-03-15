import { statsFunctionOfLinks, totalstatsLinks, uniqueStatsLinks, brokenStatsLinks } from '../lib/module/module1/stats.js/index.js';
import { validationCorrectsLinks } from '../lib/module/module1/validate.js';
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
    statsFunctionOfLinks('function() { }', route).then((response) => {
      expect(response).toEqual(result);
      done();
    }).catch(() => {
      done();
    });
  });
});

describe('totalstatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof totalstatsLinks).toBe('function');
  });
  it('Debería contar el total de links', (done) => { 
    totalstatsLinks(route).then((result) => {
      expect(result).toEqual('Total: 1');
      done();
    }).catch(() => {
      done();
    });
  });
});

describe('uniqueStatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof uniqueStatsLinks).toBe('function');
  });
  it('Debería contar el total de links', (done) => { 
    uniqueStatsLinks(route).then((result) => {
      expect(result).toEqual('Unique: 1');
      done();
    }).catch(() => {
      done();
    });
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
    }).catch(() => {
      done();
    });
  });
});