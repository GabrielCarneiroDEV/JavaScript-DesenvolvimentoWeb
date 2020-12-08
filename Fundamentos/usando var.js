// uma variavel var pode ser declarada dentro de diversos escopos, com excessão das functions exp:

{
    {
        {
            var letra = "a";
        }
    }
}

console.log (letra)

//a variavel pode se acessada fora do escopo. Agora vejamos o que acontece com uma function

function escopovar (letra2){
    var letra2 = "b"
}

console.log(letra2)

//o resultado é um erro