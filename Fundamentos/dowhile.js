function getInteroAletorioEntre(min,max){
const valor = Math.random() * (max-min) + min
return Math.floor(valor)



}
let opcao

do{
    opcao = getInteroAletorioEntre(-1,10)
    console.log(`${opcao}`)

}while (opcao != -1)