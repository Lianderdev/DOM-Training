let id = document.getElementById('id');
let classe = document.querySelector('.classe');
let main = document.querySelector('main');
let classes = document.querySelectorAll('.classes')
let h1 = document.querySelector('h1')

id.style.border = '2px solid red'
id.style.color = 'red'
classe.style.border = '2px solid green'

classes.forEach(classe => console.log(classe))

h1.textContent = 'DOM'

let h2 = document.createElement('h2')
h2.textContent= 'Document Object Model'
main.append(h2)

let h3 = document.getElementsByTagName('h3')[0].value
console.log(h3)

let span = document.querySelector('.classe span');
span.style.border = '2px solid red'

let span2 = document.createElement('span')
span2.style.color = 'green'
span2.textContent = 'liander'
classe.append(span2)

classe.removeChild(span2)
h2.remove()

let h5 = document.createElement('h5')
h5.style.color = 'green'
h5.textContent = 'liander Gostosão'
classe.insertBefore(h5,span)