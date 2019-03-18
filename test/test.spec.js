import { arrayOfFile, filterToFileMd, regexFilterLinks, readFileForExtracLinks } from '../lib/modules/links.js';
const path = require('path');

describe('arrayOfFile', () => {
  it('debería ser una función', () => {
    expect(typeof arrayOfFile).toBe('function');
  });
  it('Debería poder recorrer la ruta de un archivo', () => {
    expect(arrayOfFile(path.join(`${process.cwd()}`, 'test\\PRUEBITA\\marked.js'))).toEqual([path.join(`${process.cwd()}`, 'test\\PRUEBITA\\marked.js')]);
  });
  it('Debería poder recorrer los archivos del directorio', () => {
    expect(arrayOfFile([path.join(`${process.cwd()}`, 'test\\PRUEBITA')])).toEqual([ path.join(`${process.cwd()}`, 'test\\PRUEBITA\\dos\\koko.js.txt'),
      path.join(`${process.cwd()}`, 'test\\PRUEBITA\\dos\\tres\\pepe.md.txt'),
      path.join(`${process.cwd()}`, 'test\\PRUEBITA\\lists.MD'),
      path.join(`${process.cwd()}`, 'test\\PRUEBITA\\marked.js'),
      path.join(`${process.cwd()}`, 'test\\PRUEBITA\\marked.mD')]);
  });
});

describe('filterToFileMd', () => {
  it('debería ser una función', () => {
    expect(typeof filterToFileMd).toBe('function');
  });
  it('Debería poder filtrar solo los archivos markdown', () => {
    expect(filterToFileMd(path.join(`${process.cwd()}`, 'test\\PRUEBITA'))).toEqual([path.join(`${process.cwd()}`, 'test\\PRUEBITA\\lists.MD'),
      path.join(`${process.cwd()}`, 'test\\PRUEBITA\\marked.mD')]);
  });
});

describe('regexFilterLinks', () => {
  it('debería ser una función', () => {
    expect(typeof regexFilterLinks).toBe('function');
  });
  it.only('Debería poder extraer los links del contenido markdown', () => {
    expect(regexFilterLinks(`
    [semver](https://semver.org/)
    ![diferente](https://semver.org/)
    [semver](https://semver.org/)
    ![diferente](https://semver.org/)`, path.join(`${process.cwd()}`, 'test\\PRUEBITA'))).toEqual([ { text: 'semver',
      href: 'https://semver.org/',
      file:
    path.join(`${process.cwd()}`, 'test\\PRUEBITA') },
    { text: 'semver',
      href: 'https://semver.org/',
      file:
    path.join(`${process.cwd()}`, 'test\\PRUEBITA') } ]);
  });
});

describe('readFileForExtracLinks', () => {
  it('debería ser una función', () => {
    expect(typeof readFileForExtracLinks).toBe('function');
  });
  it('Debería poder leer el archivo para extraer los links del contenido markdown', () => {
    expect(readFileForExtracLinks(path.join(`${process.cwd()}`, 'test\\PRUEBITA'))).toEqual([ { text: 'semver',
      href: 'https://semver.org/',
      file:
    path.join(`${process.cwd()}`, 'test\\PRUEBITA') },
    { text: 'semver',
      href: 'https://semver.org/',
      file:
    path.join(`${process.cwd()}`, 'test\\PRUEBITA') } ]);
  });
});

