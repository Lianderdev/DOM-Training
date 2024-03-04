function mudarCor(color){
    const circulo = document.querySelector('.circle')
    circulo.style.background = color
}

function mudarImagem(e){
    document.querySelector('.ursos').src = (e)
}