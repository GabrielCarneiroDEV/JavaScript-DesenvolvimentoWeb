//armazenando uma função em uma variavel ou constante
const imprimirSoma = function(a,b){
    console.log (a+b)
}

imprimirSoma(2,3)

//armazenando uma função arrow em uma variavel

const soma = (a,b)=>{
    return a+b
}

console.log(soma(2,3))
//na função arrow o "=>" substitui a palavra function


//retorno implicito 

const subtracao = (a,b)=> a-b

console.log(subtracao(2,3))
//essa forma de escrita reduz a quantidade de código escrita e pode ser utilizado em funções simples 

