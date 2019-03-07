const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function(callback){
    const lista = [];
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main(){
try {

    const { results } = await obterPessoas('a')

    const names = results.filter(item => {
       const resul =  item.name.toLowerCase().indexOf('lars') !== -1
       return resul
    })
    
    const names = familiaLars.map((pessoa) => pessoa.name)

console.log(names)
} catch (error) {
    console.error('DEU ERRO', error)
}
}

// main()

async function main2(){
    try {
    
        const { results } = await obterPessoas('a')
    
        const familiaLars = results.meuFilter((item) =>  {
            // console.log(index, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })
    

        const names2 = familiaLars.map((pessoa) => pessoa.name)

    console.log(names2)
    } catch (error) {
        console.error('DEU ERRO', error)
    }
    }
    
    main2()