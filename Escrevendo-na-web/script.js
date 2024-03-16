const spanNome = document.querySelector('span')
const inputNome = document.querySelector('input')


//addEventlistener = 'input' <- isso é um evento de entrada
inputNome.addEventListener('input', letras => {
    spanNome.textContent = letras.target.value 
})