//usando destructuring como parametro de uma função 

function rand ({min =0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}


//passando parametro da função
const obj = {max: 100, min:0}



//sorteando 10 numeros usando for
for (let i = 0; i<=10; i++){
    console.log(rand(obj))
}