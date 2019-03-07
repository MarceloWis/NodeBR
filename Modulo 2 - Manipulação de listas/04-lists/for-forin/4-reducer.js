const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function(callback, valorIncial){
    let valorFinal = typeof valorIncial !== undefined ? valorIncial : this[0];

    for (let index = 0; index <= this.length -1; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}



async function main(){
    try {
        
        const { results } = await obterPessoas('a')

        const pesos = results
            .map(item => parseInt(item.height))
            .reduce((anterior, proximo) => anterior + proximo)
        
        console.log(pesos)

    } catch (error) {
        console.error('DEU ERRO!', error)
    }
}

// main()

async function main2(){
  try {

    const minhaLista = [
        ['Marcelo', 'Wis'],
        ['NodeBR', 'Nerdzão']
    ]

    const total = minhaLista.meuReduce((anterior, proximo) => {
        return anterior.concat(proximo) 
    }, []).join(', ')

    console.log(total)

  } catch (error) {
      console.error('DEU RUIM!!', error)
  }

}
main2()