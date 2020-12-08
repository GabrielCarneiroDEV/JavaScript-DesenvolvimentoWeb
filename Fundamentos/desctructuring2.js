// abaixo uma forma de utilizar o operador de atribuição destructuring, nesse caso podemos ver que ele de fato está atribuindo valores em arrays e ao mesmo tempo as colocando dentro de variaveis

const [a] = [10]
console.log(a)

const [n1, ,n3, n4, n5, n6=0] = [10, 7, 9, 5]

console.log(n1,n3,n5,n6)

