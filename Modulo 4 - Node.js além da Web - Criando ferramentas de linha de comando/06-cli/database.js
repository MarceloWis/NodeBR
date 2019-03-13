const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this.FILENAME = 'heroes.json';
  }
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.FILENAME);
    return JSON.parse(arquivo.toString());
  }
  async escreverArquivo(dados) {
    await writeFileAsync(this.FILENAME, JSON.stringify(dados));
    return true;
  }
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo();
    //workaround para simular um id
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiComId = {
      ...heroi,
      id,
    };

    return await this.escreverArquivo([...dados, heroiComId]);
  }
  async listar(id) {
    const dados = await this.obterDadosArquivo();

    const dadosFilter = dados.filter(item => {
      return id ? item.id === id : true;
    });

    return dadosFilter;
  }
  async remover(id) {
    const dados = await this.obterDadosArquivo();
    const index = dados.findIndex(item => item.id !== parseInt(id));

    if (index === -1) {
      throw Error('heroi não existe');
    }

    const atual = dados[index];

    dados.splice(atual, 1);
    console.log(dados);
    await this.escreverArquivo(dados);
    return true;
  }
}

module.exports = new Database();
