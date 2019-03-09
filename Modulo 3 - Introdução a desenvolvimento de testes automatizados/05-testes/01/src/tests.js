const assert = require('assert');
const { obterPessoa } = require('./service');

/**
 * Instalamo o nock, para simular req
 */
const nock = require('nock');

describe('Star Wars Tests', () => {
  beforeEach(() => {
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          homeworld: 'https://swapi.co/api/planets/8/',
          created: '2014-12-10T15:11:50.376000Z',
          edited: '2014-12-20T21:17:50.311000Z',
          url: 'https://swapi.co/api/people/3/',
        },
      ],
    };

    nock('https://swapi.co/api/people')
      .get('/?search=R2-D2&format=json')
      .reply(200, response);
  });

  it('deve buscar o r2d2 com o formato correto', async () => {
    const expected = [{ nome: 'R2-D2', peso: '96' }];
    const nomeBase = 'R2-D2';

    const resultado = await obterPessoa(nomeBase);
    assert.deepEqual(resultado, expected);
  });
});
