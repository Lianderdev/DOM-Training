const botao = document.querySelector('button')
let contador = 1

botao.addEventListener('click', () => {
    const span = document.querySelector('span')
    return span.textContent = `${contador++}`
})