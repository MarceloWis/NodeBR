const { deepEqual } = require('assert');
const DEFAULT_ITEM_CADASTRADO = require('./constants');
const database = require('./database');

describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar um heroi, usando aquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;

    const [resultado] = await database.listar(expected.id);
    deepEqual(resultado, expected);
  });

  it('deve cadastrar um heroi', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    await database.cadastrar(DEFAULT_ITEM_CADASTRADO);

    const [realResult] = await database.listar(expected.id);
    deepEqual(realResult, expected);
  });
});
