// antes de mais nada, os tipos primitivos e objetos se comportam de maneira diferente, um tipo primitivo armazena o valor dentro da variável enquanto um objeto apenas aponta o local na memoria onde o valor está armazenado. 
/*

let a = 1
let b = a

b++

console.log (b, a)

//na minha saída o valor de b não influencia o valor de a


const a1={
    numero:1
}
const b1 = a1


console.log(b1)

b1.numero = 2

console.log(b1, a1)

//nesse caso o nome do objeto apenas faz uma passagem por referencia apontando o caminho para o valor armazenado. Sendo assim, qualquer alteração em a1, modifica o valor de b1 e vice versa.



//--------------------------------//
*/

let valor //sem valor atribuido
console.log(valor) //saída: undefined
//console.log(valor2) para uma varavel não declarada a saída é valor2 is not defined


valor = null //é diferente de undefined
console.log(null)



//é uma boa prática utilizar "null" quando não se deseja atribuir um valor e deixar que o sistema atribua undefined caso não haja valor atribuido