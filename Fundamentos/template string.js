const nome = "Gabriel";

// nesse caso não é possível fazer quebras de linha, 
const concatenacao = "Olá " + nome + "!";

//no template string é possível fazer quebra de linhas não é necessário utilizar + pra isso se utiliza crase e é utilizado ${} para acessar a variavel
template = `
Olá 
${nome}!`

console.log (template);

//é possível utilizar para fazer expressões matemáticas

console.log(`1+1= ${1+1}`);

//podem ser utilizadas funções dentro do template
// obs: atribuição de uma função a uma variável, olha isso:
const up = texto => texto.toUpperCase()
console.log(`Ei... ${nome} ${up('cuidado')} !`)

