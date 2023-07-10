// Usando cualquiera de los tres HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de qué HTML hayas elegido


const buttonElement = document.getElementById('button');

const ulElement = document.getElementById('ul')


buttonElement.addEventListener ('click', () => {
    const newLi = document.createElement('li')
    let counter = newLi.children.length + 1
    newLi.textContent = 'Item' + counter 
    ulElement.append(newLi)
    
});


// Usando el input range que te doy haz un generador de encabezados

const buttonGenerateElement = document.getElementById('generate');

const labelElement = document.getElementById('label');

const rangeElement = document.getElementById('range');

const containerElement = document.getElementById('container-range');

buttonGenerateElement.addEventListener('click', () => {
    const newTitle = document.createElement('h'+ labelElement.textContent) 

    newTitle.textContent = 'Soy un encabezado';

    containerElement.append(newTitle);
});

rangeElement.addEventListener('input', event => {
    labelElement.textContent = event.target.value;
});


// Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor como el del ejemplo. Cada post debe ir dentro de un div independiente.

const formElement = document.getElementById('form');
const authorContainer = document.getElementById('author-container');
const authorElement = document.getElementById('author');
const authorText = document.getElementById('author-text');
const messageContainer = document.getElementById('message-container');
const messageElement = document.getElementById('message');
const messageText = document.getElementById('message-text');
const buttonPost = document.getElementById('button-post');
const spanAuthorElement = document.getElementById('span-author');
const textAuthorExampleElement = document.getElementById('text-author-example');
const containerAuthorElement = document.getElementById('container-author');


buttonPost.addEventListener('click', () =>{

    const newSpan = document.createElement('span')
    const newText = document.createElement('p');

    newText.textContent = authorText.value;

    newSpan.textContent = `Author: ${messageText.value}`

    containerAuthorElement.append(newSpan)

    containerAuthorElement.append(newText)

    
}); 



// Crea una función que genere un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.


const newContainer = document.createElement('div');

const newButtonRed = document.createElement('button');
newButtonRed.textContent = 'red';

const newButtonGreen = document.createElement('button');
newButtonGreen.textContent = 'green'

newContainer.append(newButtonRed)
newContainer.append(newButtonGreen)
document.body.append(newContainer);

newButtonRed.addEventListener('click', () => {
    newContainer.classList.add('red')
});

newButtonGreen.addEventListener('click', () => {
    newContainer.classList.add('green')
});

// ## Inserción múltiple

// - Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

const fragment = document.createDocumentFragment();

const randomNumbers = () => {
    const arrayNumbers = []
    
    for (let i= 0; i <= 25; i++){
        const random = Math.floor(Math.random()* 25)

    arrayNumbers.push(random)
    }

    return arrayNumbers

}

// - Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.


