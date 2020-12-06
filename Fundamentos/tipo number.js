/* Exemplo de algumas utilizações 
e funções dentro do tipo number. */

const peso1 = 1.0;
const peso2 = Number ('2.0');



//a função typeof me dá como resultado o tipo da variavel
console.log(typeof(peso1));

console.log(typeof(peso2));


//.................................//

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 *peso2;

const media = total / (peso1+peso2);
// a função toFixed especifíca a quantidade de casa decimais.
console.log (media.toFixed(2));

//.................................//



