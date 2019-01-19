/*
    0 - Obter um usuario
    1 - Obter o numero de telefone de um usuario apartir do seu Id
    2 - Obter o endereço do usuario pelo ID
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '112345',
            ddd: '111'
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    },2000)
}
// function resolverUsuario(error, usuario){
//     console.log('usuario', usuario)
// }


obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        } 
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('DEU RUIM em ENDERECO', error2)
                return;
            }
            console.log(`
            Nome:      ${usuario.nome}
            Endereco:  ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
   
        `)
      })
    })
})



// console.log('telefone', telefone)
