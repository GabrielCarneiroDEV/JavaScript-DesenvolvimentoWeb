//destructing é um novo operador do ES2015, um operador de desestruturação, é uma forma de extrair atributos de de detro de objetos ou de uma array

const pessoa = {
    nome: 'ana',
    idade: 20,
    endereço: {
        logradouro:'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)

//no caso abaixo as chaves representam a desestruturação, dentro dela, estão os atributos que serão extraídos e depois do "=" fica o objeto a que se refere

const {nome,idade} = pessoa
console.log (nome, idade)


