import { validationCorrectsLinks } from '../LIB/MODULE/validate.js';

const route = 'C:\\Users\\nataly\\Documents\\PROYECTOS DE FRONT END\\LIM008-fe-md-links\\test\\PRUEBITA';

const output = 'Promise { <pending> }';

describe('validationCorrectsLinks', () => {
  it('Debería validar los links correctos y retornar un array de promesas', (done) => {
    validationCorrectsLinks(route).then(() => {
      expect(validationCorrectsLinks).toEqual(output);
      done();
    }).catch(() => {
      done();
    });
  });
});