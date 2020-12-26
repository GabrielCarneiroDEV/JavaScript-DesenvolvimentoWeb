//função em JS é First-class Object ou citizens
//high-order funcition

//criar função de forma literal

function func1 (){

    //o retorno e os parametros de uma função são opcionais, caso não haja nenhum retorno, o retorno será undefined
}

//tbm é possível armazenar uma função dentro de uma variavel

const funcVari = function () { }


//tbm é possível armazenar em uma array 
const array1 = [function(a,b) {return a +b}, func1, funcVari]
console.log(array1[0](2,3))

//a função tbm pode ser armazenada em um atributo de um objeto
const obj = {}
obj.falar = function () {return 'fala tu'}
console.log(obj.falar())

//passar função como parametro par aoutra função

function run (func1){
    func1()
}

run(function () {console.log('executando')})

//uma função pode retornar/conter uma função

function soma (a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,2)(2)