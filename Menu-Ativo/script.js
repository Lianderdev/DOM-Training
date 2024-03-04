// Mapeando os links de navegação e seções
let links = document.querySelectorAll('.link')
let section = document.querySelectorAll('.sections')

// Criando evento de Scroll
window.addEventListener('scroll', () => {
    // visualizando em qual section o scroll está
    section.forEach(section => {
    // Pegando a posição da barra de rolagem
    let top = window.scrollY;
    // Pegando a posição inicial de cada seção
    let offset = section.offsetTop - 50;
    // Pegando a altura da seção
    let heightSection = section.offsetHeight;
    // Pegando ID das seções
    let idSection = section.getAttribute('id')

    //Função => quando determinada seção estiver visivel no navegador faça algo
    if (top >= offset && top < offset + heightSection){
        links.forEach(link => {
            link.classList.remove('active')

            document.querySelector(`header nav a[href*='${idSection}']`).classList.add('active')
        })
    }
    })
})