import { validationCorrectsLinks } from '../lib/modules/validate.js';
const path = require('path');
const fetchMock = require('../__mocks__/node-fetch.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;

const route = path.resolve(`${process.cwd()}/test/PRUEBA2`);


describe('validationCorrectsLinks', () => {
  it('Deberia ser unaa funcion', () => {
    expect(typeof validationCorrectsLinks).toBe('function');
  });
  it('Debería validar los links correctos y retornar un array de objetos', (done) => {
    fetchMock
      .mock('https://semver.org/', 200)
      .mock('https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback', 200)
      .mock('https://github.com/octokit/rest.js/issu', 404, {overwriteRoutes: false})
      .mock('SOY-URL-NO-VALIDO', new Promise((resolve, reject) => reject), {overwriteRoutes: false});
    validationCorrectsLinks(route).then((response) => {
      expect(response).toEqual([ { text: 'semver',
        href: 'https://semver.org/',
        file: path.resolve(`${process.cwd()}/test/PRUEBA2/list2.md`),
        status: 200,
        message: 'OK' },
      { text: 'Leer un directorio',
        href:
       'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
        file: path.resolve(`${process.cwd()}/test/PRUEBA2/list.md`),
        status: 200,
        message: 'OK' },
      { text: 'Hola',
        href: 'https://github.com/octokit/rest.js/issu',
        file: path.resolve(`${process.cwd()}/test/PRUEBA2/list2.md`),
        status: 404,
        message: 'Fail' }
      ]);
      done();
    }).catch((error) => {
      expect(error).toEqual([{ text: 'SOY TEXTO',
        href: 'SOY-URL-NO-VALIDO',
        file: path.resolve(`${process.cwd()}/test/PRUEBA2/list3.md`),
        status: 'URL Invalida',
        message: 'Fail' }]);
      done();
    });
  });
});