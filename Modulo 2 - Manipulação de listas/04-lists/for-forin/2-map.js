const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = [];
    for(let i = 0; i <= this.length -1; i ++){
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main(){
    try {
        const results = await service.obterPessoas('a');
        const names = []

        console.time('forEach')
        results.results.forEach(function(item){
            names.push(item.name)
        })
        console.timeEnd('forEach')
        console.log(names)
    } catch (error) {
        console.error('DEU RUIM!', error)
    }
}
// Usando ForEach
// main()

async function main2(){
    try {
        
        console.time('map')
        
        const result = await service.obterPessoas('a')
       const names2 =  result.results.map(function(item){
            return item.name
        })
        console.timeEnd('map')
        console.log(names2)

    } catch (error) {
        console.error('DEU RUIM!', error)
    }
}
// Usando .map
// main2()

async function main3(){
    try {
        
        console.time('meuMap')
        
        const result = await service.obterPessoas('a')
       const names3 = result.results.meuMap(function(pessoa, indice){
           return `[${indice + 1}] - ${pessoa.name}`
       })
        console.timeEnd('meuMap')
        console.log(names3)

    } catch (error) {
        console.error('DEU RUIM!', error)
    }
}
// Usando .map
main3()