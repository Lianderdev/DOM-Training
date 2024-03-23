// retorne o maior valor do array dado nos parametros da função

function retornar (input) {
    // return console.log(Math.max(... input))
    let maior = 0
    for(let i = 0; i < input.length; i++){
        maior = input[0]
        if ( maior < input[i]){
            maior = input[i]
        }
    }
     return console.log(maior)
}

retornar([5,2,3,4,5,3,9,1,8,10])