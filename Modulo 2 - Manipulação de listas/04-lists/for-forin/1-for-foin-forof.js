const service = require('./service');

async function main(){
    try {
        
        const result = await service.obterPessoas('a')

        const names = []
        console.time('for')
        for(let i = 0; i <= result.results.length - 1; i++){
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }

        console.timeEnd('for');

        console.log(names)
    } catch (error) {
        console.error('Deu Erro', error)
    }
}

// Main usando for
// main(); 

async function main2(){
    try {
        
        const result = await service.obterPessoas('a')

        const names = []
        console.time('forin')
        for(const i in result.results){
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('forin');

        console.log(names)
    } catch (error) {
        console.error('Deu Erro', error)
    }
}
// Main usando For in
//main2()

async function main3(){
    try {
        
        const result = await service.obterPessoas('a')

        const names = []
        console.time('forof')
        for (pessoa of result.results) {
             names.push(pessoa.name)
        }
        console.timeEnd('forof');

        console.log(names)
    } catch (error) {
        console.error('Deu Erro', error)
    }
}
main3()