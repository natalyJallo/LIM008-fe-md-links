import { converterPathAbsolute, arrayOfFile, filterToFileMd, regexFilterLinks, readFileForExtracLinks } from '../LIB/MODULE/links.js';

const output = ['C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.js'];

const output1 = ['C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\dos\\koko.js.txt',
  'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\dos\\tres\\pepe.md.txt',
  'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.js',
  'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md'];

const output2 = ['C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md'];

const output3 = 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md';

const output4 = '[semver](https://semver.org/)![diferente](https://semver.org/)';

const output5 = [
  { file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md',
    href: 'https://semver.org/',
    text: 'semver](https://semver.org/)![diferente'}];
 
 
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

describe('regexFilterLinks', () => {
  it('debería ser una función', () => {
    expect(typeof regexFilterLinks).toBe('function');
  });
  it('Debería poder extraer los links del contenido markdown', () => {
    expect(regexFilterLinks(output4, output3)).toEqual(output5);
  });
});

describe('readFileForExtracLinks', () => {
  it('debería ser una función', () => {
    expect(typeof readFileForExtracLinks).toBe('function');
  });
  it('Debería poder leer el archivo para extraer los links del contenido markdown', () => {
    expect(readFileForExtracLinks(output3)).toEqual(output4);
  });
});

