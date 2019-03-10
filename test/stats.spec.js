import { statsFunctionOfLinks, totalLinks, uniqueStatsLinks, brokenStatsLinks } from '../LIB/MODULE/stats.js';

const input1 = []
const input2 = []
const input3 = []
const input4 = []
const input4 = []

const output = []
describe('statsFunctionOfLinks', () => {
  it('debería ser una función', () => {
    expect(typeof statsFunctionOfLinks).toBe('function');
  });
  it('Debería retornar el conteo de links', () => {
      
    expect(statsFunctionOfLinks(input1, input2)).toEqual(output);
  });
});

describe('totalLinks', () => {
  it('debería ser una función', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('Debería contar el total de links', () => {
    expect(totalLinks(input3)).toEqual(output);
  });
});

describe('uniqueStatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof uniqueStatsLinks).toBe('function');
  });
  it('Debería contar los links unicos', () => {
    expect(uniqueStatsLinks(input4)).toEqual(output);
  });
});


describe('brokenStatsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof brokenStatsLinks).toBe('function');
  });
  it('Debería contar los links rotos', () => {
    expect(brokenStatsLinks(input5)).toEqual(output);
  });
});