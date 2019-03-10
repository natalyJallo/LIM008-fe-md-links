import { validationCorrectsLinks } from '../LIB/MODULE/validate.js';

const input = [
  { file: 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA\\marked.md',
    href: 'https://semver.org/',
    text: 'semver](https://semver.org/)![diferente'}];

const output = 'Promise { <pending> }';

describe('validationCorrectsLinks', () => {
  it('debería ser una función', () => {
    expect(typeof validationCorrectsLinks).toBe('function');
  });
  it('Debería validar los links correctos y retornar un array de promesas', () => {
    validationCorrectsLinks(input).then(() => {
      expect(validationCorrectsLinks).toEqual(output);
    });
  });
});