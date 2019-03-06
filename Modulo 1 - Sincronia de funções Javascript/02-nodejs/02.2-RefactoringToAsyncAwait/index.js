
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario(){
    /**
     * Quando tiver problema cai no @param reject
     * Quando sucesso  @param resolve
     */
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}
/**
 * @param {number} idUsuario 
 */
function obterTelefone(idUsuario){
    return new Promise(function(resolve){
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000);
    })
    
}

/**
 * @param {number} idUsuario 
 */
function obterEndereco(idUsuario, callback){
        setTimeout(function(){
            return callback(null,{
                rua: 'dos bobos',
                numero: 0
            })
    }) 
}

/**
 * Adicionar Async na function => retuna Promise
 */
async function main(){
    try {
        const usuario =  await obterUsuario();

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`
        Nome: ${usuario.nome}
        Endereço: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd})${telefone.telefone}

    `)

    } catch (error) {
        console.error('DEU RUIM!', error)
    }
}

main()