
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
 * Para manipular Sucess
 * .then()  
 * 
 * Para manipular Erro
 * .catch
 */
const usuarioPromise = obterUsuario();

usuarioPromise
    .then(function(usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone:resultado.telefone,
                endereco:result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}

        `)
    })
    .catch(function(error){
        console.error('DEU RUIM!', error)
    })

