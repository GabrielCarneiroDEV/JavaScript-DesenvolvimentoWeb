// break e continue são palavras reservadas responsáveis por controle de fluxo veja os exemplos:


// nesse caso laço de repetição para no indice 5:
const nums = [2, 4, 5 ,6 ,7, 8, 9,20, 1, 3, 13,50]

for(i in nums){
     console.log(`${nums[i]}`)
    if (i == 5){
        break
    }
}



//nesse caso o indice 5 é pulado e laço de repetição continua:

for (i in nums){
    
    if(i == 5){
    continue
    }
    console.log(`${i} =  ${nums[i]}`)
}