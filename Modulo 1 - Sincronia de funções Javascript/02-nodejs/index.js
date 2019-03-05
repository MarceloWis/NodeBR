/*
TODO:
    - Obter Usuario
    - Obter o numero de telefone de um usuario a partir do seu Id
    - Obter o endereço do usuario a partir do seu Id
*/


/**
 * Simula a chamada de um Banco (Async)
 * return callback(error{ ... })
 */
function obterUsuario(callback){
    setTimeout(function(){
        return callback(null,{
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}
/**
 * @param {number} idUsuario 
 */
function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
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
    }, 2000);
}

/**
 * Usuario: undefined
 * Motivo: Como a function tem um setTimeout,
 * ele executa primeiro o 
 * console.log('Usuario', usuario);
 * console.log('Telefone', telefone);
 * e depois de 2 segundos executa 
 * obterEndereco(); e 
 * obterTelefone(usuario.id);
 */
/** ---------------------------------------------------------------------------- */
// const usuario = obterEndereco();
// const telefone = obterTelefone(usuario.id);
// console.log('Usuario', usuario);
// console.log('Telefone', telefone);
/** ---------------------------------------------------------------------------- */

/**
 * 
 * @param  erro 
 * @param  usuario 
 */
/**  
 *  Padrão do Callback
 * function(error, callback){}
*/
function resolveUsuario(erro, usuario){
    console.log('Usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false
    if(error){
        console.error('DEU RUIM em USUARIO', error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('DEU RUIM em TELEFONE', telefone);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('DEU RUIM em ENDEREÇO', endereco);
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
});
