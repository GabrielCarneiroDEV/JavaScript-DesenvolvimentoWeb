// uma função sem parametro, pode ainda assim, receber parametros, utiliza-se a propriedade arguments para recuperar os parametros


function soma(){
let soma = 0

for (i in arguments) {
    soma+= arguments[i]
}
return soma
}
//nesse caso arguments funciona como uma array.

console.log(soma())
console.log(soma(2,4))
console.log(soma(2,2,2,2,2,2))

//esse é um método antigo, existe um operador específico criado no ES2015 para fazer a mesma coisa