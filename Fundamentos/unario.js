let num =1
let num2 = 2

num++
console.log(num)

--num
console.log(num)
//as expressões matemáticas são sempre lidas da esquerda pra direita, na situação abaixo, o resultado é true. por que o operador relacional faz a comparação antes de ocorrer o decremento na variavel num2

console.log(++num === num2--)


// logo em seguida o retorno passa a ser falso:

console.log (num === num2)

//dica: tirar incremento de dentro da comparação. 