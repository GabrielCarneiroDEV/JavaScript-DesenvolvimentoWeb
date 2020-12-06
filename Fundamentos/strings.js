// pode ser usado aspas duplas, aspas simples ou crase


// a função charAt pode ser utilizada para mostrar um determinado caractere dentro da string. Assim como em uma array o indice tem inicio em 0. 
const nome = "Gabriel"

console.log(nome.charAt(0));


// a função charCodeAt busca o código relacionado ao caractere na tabela unicode:

console.log(nome.charCodeAt(0));

// a função indexOf retorna a posição de determinado caractere dentro do indice

console.log(nome.indexOf("G"))


// substring pode determinar o ponto em que a string é exibida. Também pode ser indicado o final.
console.log(nome.substring(0, 3))

// concatenação 

console.log("Olá ".concat(nome).concat("!"))

//outra forma de concatenar

console.log ("Olá " + nome + "!")

// replace pode modificar um caractere ou vários dentro da string
console.log(nome.replace("Gabriel", "Gabzin"))

// split converter string em array a partir de um ponto determinado pode ser um espaço, virgula, ponto, caractere...

console.log("João, Maria, josé".split(","))


