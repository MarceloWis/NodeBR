const { deepEqual } = require('assert');
const database = require('./database');
const DEFAULT_ITEM_CADASTRADO = { nome: 'Flash', poder: 'Speed', id: 1 };
const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Anel do poder',
  id: 2,
};

describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar um heroi, usando aquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;

    const [resultado] = await database.listar(1);
    deepEqual(resultado, expected);
  });

  it('deve cadastrar um heroi', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    await database.cadastrar(DEFAULT_ITEM_CADASTRADO);

    const [realResult] = await database.listar(expected.id);
    deepEqual(realResult, expected);
  });
  it('deve remover um heroi por id', async () => {
    await database.remover(1);
  });
  it.only('deve atualizar um heroi por id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro',
    };
    const novoDado = { nome: 'Batman', poder: 'Dinheiro' };

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
    console.log('resultado', resultado);
    deepEqual(resultado, expected);
  });
});
