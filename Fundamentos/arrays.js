// em JS o array é heterogenio e o tamanho dele não é fixo como em outras linguaguens

const valores = [1,2,3,4,5,6,7];
console.log(valores[0], valores[2]);


//tamanho da array
console.log(valores.length);


//adicionar valor em uma posição do indice

valores[7] = 30;

console.log(valores)

//para adicionar valores na array utiliza-se a função push:
valores.push(40, 50 )

console.log(valores)

// você pode misturar tipos dentro de uma array apesar de não ser indicado:

const mistureba = [10, "dez",false, true, 50, 4.2]

console.log(mistureba)

//a função pop retorna o ultimo valor da array e a exclui

console.log(mistureba.pop())
// depois da função o ultimo valor não existe mais no indice
console.log (mistureba)

//você pode excluir um valor do indice utilizando delete


delete valores [0]

//descoberta: delete valores[valores.length-1] deleta o ultimo valor.
console.log(valores)

// em javascript uma array é do tipo object

console.log(typeof(valores))


