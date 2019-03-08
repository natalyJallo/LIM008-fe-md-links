import { converterPathAbsolute, arrayOfFile, filterToFileMd, readFileMd } from '../LIB/MODULE/links.js';

const output = ['C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.js'];

const output1 = ['C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\dos\\koko.js.txt',
  'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\dos\\tres\\pepe.md.txt',
  'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.js',
  'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md'];

const output2 = ['C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md'];

const output3 = ['[semver](https://semver.org/)![diferente](https://semver.org/)'];

const output4 = [ { text: 'semver',
  href: 'https://semver.org/',
  file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md' } ];

describe('converterPathAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof converterPathAbsolute).toBe('function');
  });
  it('Debería poder convertir una ruta relativa en absoluta', () => {
    expect(converterPathAbsolute('../LIM008-fe-md-links/test/PRUEBITA/marked.js')).toEqual('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.js');
  });
});

describe('arrayOfFile', () => {
  it('debería ser una función', () => {
    expect(typeof arrayOfFile).toBe('function');
  });
  it('Debería poder recorrer los archivos del directorio', () => {
    expect(arrayOfFile('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.js')).toEqual(output);
  });
  it('Debería poder recorrer los archivos del directorio', () => {
    expect(arrayOfFile('C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\')).toEqual(output1);
  });
});

describe('filterToFileMd', () => {
  it('debería ser una función', () => {
    expect(typeof filterToFileMd).toBe('function');
  });
  it('Debería poder filtrar solo los archivos markdown', () => {
    expect(filterToFileMd(output1)).toEqual(output2);
  });
});

describe('readFileMd', () => {
  it('debería ser una función', () => {
    expect(typeof readFileMd).toBe('function');
  });
  it('Debería poder leer el contenido de los archivos markdown', () => {
    expect(readFileMd(output2)).toEqual(output3);
  });
});

describe('regexFilterCorrectLinks', () => {
  it('debería ser una función', () => {
    expect(typeof regexFilterCorrectLinks).toBe('function');
  });
  it('Debería poder extraer los links del contenido markdown', () => {
    expect(regexFilterCorrectLinks(output3)).toEqual(output4);
  });
});

