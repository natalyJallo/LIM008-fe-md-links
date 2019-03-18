import { validationCorrectsLinks } from '../lib/modules/validate.js';
const path = require('path');
const fetchMock = require('../__mocks__/node-fetch.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;

const route = path.join(`${process.cwd()}`, 'test\\PRUEBA2');


describe('validationCorrectsLinks', () => {
  it('Deberia ser unaa funcion', () => {
    expect(typeof validationCorrectsLinks).toBe('function');
  });
  it('Debería validar los links correctos y retornar un array de objetos', (done) => {
    fetchMock
      .mock('https://semver.org/', 200)
      .mock('https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback', 200)
      .mock('https://github.com/octokit/rest.js/issu', 404, {overwriteRoutes: false})
      .mock('SOY-URL-NO-VALIDO', 'URL Invalida', {overwriteRoutes: false});
    validationCorrectsLinks(route).then((response) => {
      expect(response).toEqual([ { text: 'semver',
        href: 'https://semver.org/',
        file: path.join(`${process.cwd()}`, 'test\\PRUEBA2'),
        status: 200,
        message: 'OK' },
      { text: 'Leer un directorio',
        href:
       'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
        file: path.join(`${process.cwd()}`, 'test\\PRUEBA2'),
        status: 200,
        message: 'OK' },
      { text: 'Hola',
        href: 'https://github.com/octokit/rest.js/issu',
        file: path.join(`${process.cwd()}`, 'test\\PRUEBA2'),
        status: 404,
        message: 'Fail' }
      ]);
      done();
    }).catch(() => {
      expect(result).toEqual([{ text: 'SOY TEXTO',
        href: 'SOY-URL-NO-VALIDO',
        file: path.join(`${process.cwd()}`, 'test\\PRUEBA2'),
        status: 'URL Invalida',
        message: 'Fail' }]);
      done();
    });
  });
});