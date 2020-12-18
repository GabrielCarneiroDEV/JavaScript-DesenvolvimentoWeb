//mecanismo de tratamento de erro
//comando try te permite escrever um bloco de código que pode gerar algum tipo de erro e associado a eese bloco se usa o catch, exemplo:
 


function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()+ '!!!')
} catch(e){
    tratarErroELancar(e)
}finally {
    console.log('final');
}

}

const obj = {nome: 'Gabriel'}
imprimirNomeGritado(obj)

function tratarErroELancar(erro){
    throw new Error ('ocorreu um erro')
    
//o bloco finally será executado com ou sem erro
}
