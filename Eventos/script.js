
const h1 = document.querySelector('h1')
const body = document.querySelector('body')

//Adiciondo uma classe no elemento
 //elemento.classList.add <- adiciona / elemento.classList.remove <- remove

//Adicionando um evento de click no botao
const altera_cor = document.querySelector('.altera-cor')
const status = document.querySelector('.status')

altera_cor.addEventListener('click', () => {
    const toggle = h1.classList.toggle('title') // podemos colocar o toggle dentro de uma variavel e ele ainda ira funcinar
    status.textContent = toggle ? 'classe adicionada' : 'classe removida'
})

//Criando elemento 
const p = document.createElement('p')
p.textContent = 'liander ama muito a vevexinha dele'
body.appendChild(p)

console.log(p)

//Manioulando eventos de scroll da janela
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;

    if (scrollTop !== 100) return h1.classList.toggle('title')
    
    console.log('Rolagem vertical:', scrollTop);
});


//pegando a tecla precionada do teclado
document.addEventListener('keydown', function(event) {
    console.log(`Tecla pressionada: ${event.key}`);
});

