const imgMinion = document.querySelector('.imgminion')
const spanMinion = document.querySelector('span')

let quantosMinions = true
//addEventlistener = 'click' <- isso é um evento de click
imgMinion.addEventListener('click', () => {
    quantosMinions = !quantosMinions

    if (quantosMinions == true) { 
        imgMinion.src = './img/minion.jpg'
        spanMinion.textContent = '1 minion'
    } else {
        imgMinion.src = './img/minions.png'
        spanMinion.textContent = '3 minions'
    }
})