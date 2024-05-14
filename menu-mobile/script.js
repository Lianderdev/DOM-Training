const AbrirMenuMObile = document.querySelector('.button-menu-mobile')
const FecharMenuMObile = document.querySelector('.fechar-menu')
const overlay = document.querySelector('.overlay')


const MenuMobile = document.querySelector('.menu-mobile')

AbrirMenuMObile.addEventListener('click', () => {
    MenuMobile.classList.add('abrir-menu')
    overlay.style.display = 'block'; // Mostra o overlay
})

FecharMenuMObile.addEventListener('click', () => {
    MenuMobile.classList.remove('abrir-menu')
    overlay.style.display = 'none'; // Esconde o overlay
})

overlay.addEventListener('click', () => {
    MenuMobile.classList.remove('abrir-menu')
    overlay.style.display = 'none'; // Esconde o overlay
})
