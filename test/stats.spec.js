import { statsFunctionOfLinks, totalstatsLinks, uniqueStatsLinks, brokenStatsLinks } from '../lib/module/stats.js';
import { validationCorrectsLinks } from '../lib/module/validate.js';
const input1 = 'function() { }';
const route = `${process.cwd()}\\test\\PRUEBITA`;
const output1 = 'Total: 1';
const output2 = 'Unique: 1';
const output3 = 'Broken: 0';
const result = [ { text: 'semver',
  href: 'https://semver.org/',
  file: `${process.cwd()}\\test\\PRUEBITA`,
  status: 200,
  message: 'OK' } ];

describe('statsFunctionOfLinks', () => {
  it('debería ser una función', () => {
    expect(typeof statsFunctionOfLinks).toBe('function');
  });
  it('Debería retornar el conteo de links', (done) => {
    statsFunctionOfLinks(input1, route).then(() => {
      expect(validationCorrectsLinks).toEqual(result);
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
    totalstatsLinks(route).then(() => {
      expect(result).toEqual(output1);
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
    uniqueStatsLinks(route).then(() => {
      expect(result).toEqual(output2);
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
    brokenStatsLinks(route).then(() => {
      expect(result).toEqual(output3);
      done();
    }).catch(() => {
      done();
    });
  });
});