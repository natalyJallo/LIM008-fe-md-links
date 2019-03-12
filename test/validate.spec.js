import { validationCorrectsLinks } from '../lib/module/validate.js';
// import { readFileForExtracLinks } from '../lib/module/links.js';

const route = `${process.cwd()}\\test\\PRUEBITA`;

const result = [ { text: 'semver',
  href: 'https://semver.org/',
  file: `${process.cwd()}\\test\\PRUEBA2`,
  status: 'URL Invalida',
  message: 'Fail' },
{ text: 'Leer un directorio',
  href:
 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
  file: `${process.cwd()}\\test\\PRUEBA2`,
  status: 'URL Invalida',
  message: 'Fail' },
{ text: 'Hola',
  href: 'https://github.com/octokit/rest.js/issu',
  file: `${process.cwd()}\\test\\PRUEBA2`,
  status: 'URL Invalida',
  message: 'Fail' },
{ text: 'SOY TEXTO',
  href: 'SOY-URL-NO-VALIDO',
  file: `${process.cwd()}\\test\\PRUEBA2`,
  status: 'URL Invalida',
  message: 'Fail' } ];


describe('validationCorrectsLinks', () => {
  it('Debería validar los links correctos y retornar un array de objetos', (done) => {
    validationCorrectsLinks(route).then(() => {
      expect(validationCorrectsLinks).toEqual(result);
      done();
    }).catch(() => {
      done();
    });
  });
});