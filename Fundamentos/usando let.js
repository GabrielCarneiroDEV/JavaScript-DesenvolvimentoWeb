// ao contrário do var, o declaração de variavel utilizando let, é lida apenas dentro do seu respectivo escopo. 



let numero = 2

{
    let numero = 1
    console.log("dentro = ", numero)
}
console.log ("fora = ", numero)