const { get } = require('axios');
const BASE_URL = 'https://swapi.co/api/people';

async function obterPessoa(name) {
  const url = `${BASE_URL}?search=${name}&format=json`;
  const response = await get(url);
  return response.data.results.map(mapearPessoas);
}

function mapearPessoas(item) {
  return {
    nome: item.name,
    peso: item.height,
  };
}

module.exports = {
  obterPessoa,
};
