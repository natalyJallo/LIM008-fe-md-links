import { converterPathAbsolute, arrayOfFile, filterToFileMd, regexFilterLinks, readFileForExtracLinks } from '../lib/module/links.js';

const input = '../LIM008-fe-md-links/test/PRUEBITA/marked.js';

const input1 = `${process.cwd()}\\test\\PRUEBITA`;

const input2 = `
[semver](https://semver.org/)
![diferente](https://semver.org/)`;

const output = `${process.cwd()}\\test\\PRUEBITA\\marked.js`;

const output1 = [`${process.cwd()}\\test\\PRUEBITA\\marked.js`];

const output2 = [ `${process.cwd()}\\test\\PRUEBITA\\dos\\koko.js.txt`,
  `${process.cwd()}\\test\\PRUEBITA\\dos\\tres\\pepe.md.txt`,
  `${process.cwd()}\\test\\PRUEBITA\\marked.js`,
  `${process.cwd()}\\test\\PRUEBITA\\marked.md` ];

const output3 = [`${process.cwd()}\\test\\PRUEBITA\\marked.md`];

const output4 = [ { text: 'semver',
  href: 'https://semver.org/',
  file:
  `${process.cwd()}\\test\\PRUEBITA` } ];

 
describe('converterPathAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof converterPathAbsolute).toBe('function');
  });
  it('Debería poder convertir una ruta relativa en absoluta', () => {
    expect(converterPathAbsolute(input)).toEqual(output);
  });
});

describe('arrayOfFile', () => {
  it('debería ser una función', () => {
    expect(typeof arrayOfFile).toBe('function');
  });
  it('Debería poder recorrer los archivos del directorio', () => {
    expect(arrayOfFile(output)).toEqual(output1);
  });
  it('Debería poder recorrer los archivos del directorio', () => {
    expect(arrayOfFile(input1)).toEqual(output2);
  });
});

describe('filterToFileMd', () => {
  it('debería ser una función', () => {
    expect(typeof filterToFileMd).toBe('function');
  });
  it('Debería poder filtrar solo los archivos markdown', () => {
    expect(filterToFileMd(input1)).toEqual(output3);
  });
});

describe('regexFilterLinks', () => {
  it('debería ser una función', () => {
    expect(typeof regexFilterLinks).toBe('function');
  });
  it.only('Debería poder extraer los links del contenido markdown', () => {
    expect(regexFilterLinks(input2, input1)).toEqual(output4);
  });
});

describe('readFileForExtracLinks', () => {
  it('debería ser una función', () => {
    expect(typeof readFileForExtracLinks).toBe('function');
  });
  it('Debería poder leer el archivo para extraer los links del contenido markdown', () => {
    expect(readFileForExtracLinks(input1)).toEqual(output4);
  });
});

