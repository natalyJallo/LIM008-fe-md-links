import { statsFunctionOfLinks, totalLinks, uniqueStatsLinks, brokenStatsLinks } from '../lib/module/stats.js';

const input1 = 'function() { }';
const route = 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA';
const output1 = 'Total: 1';
const output2 = 'Unique: 1';
const output3 = 'Broken: 0';
const result = [ { text: 'semver',
  href: 'https://semver.org/',
  file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA',
  status: 200,
  message: 'OK' } ];

describe('statsFunctionOfLinks', () => {
  it('debería ser una función', () => {
    expect(typeof statsFunctionOfLinks).toBe('function');
  });
  it('Debería retornar el conteo de links', (done) => {
    statsFunctionOfLinks(input1, route).then(() => {
      expect(statsFunctionOfLinks).toEqual(result);
      done();
    }).catch(() => {
      done();
    });
  });
});

describe('totalLinks', () => {
  it('debería ser una función', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('Debería contar el total de links', (done) => { 
    totalLinks(route).then(() => {
      expect().toEqual(output1);
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
  it('Debería contar los links unicos', () => {
    expect(uniqueStatsLinks(route)).toEqual(output2);
  });
});


describe('brokenStatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof brokenStatsLinks).toBe('function');
  });
  it('Debería contar los links rotos', () => {
    expect(brokenStatsLinks(route)).toEqual(output3);
  });
});