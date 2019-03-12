const { deepEqual, ok } = require('assert');
const DEFAULT_ITEM_CADASTRADO = { nome: 'Flash', poder: 'Speed', id: 1 };
const database = require('./database');

describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar um heroi, usando aquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;

    const [resultado] = await database.listar(expected.id);
    deepEqual(resultado, expected);
  });
});
