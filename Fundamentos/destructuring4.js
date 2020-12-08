//usando destructuring como parametro de uma função com arrays

function rand ([min = 0, max=1000]){
    if (max<min ) [min,max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([0,100]))