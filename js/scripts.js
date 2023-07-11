// Usando cualquiera de los tres HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de qué HTML hayas elegido

const buttonElement = document.getElementById('button');

const ulElement = document.getElementById('ul');

buttonElement.addEventListener('click', () => {
  const newLi = document.createElement('li');
  let counter = newLi.children.length + 1;
  newLi.textContent = 'Item' + counter;
  ulElement.append(newLi);
});

// Usando el input range que te doy haz un generador de encabezados

const buttonGenerateElement = document.getElementById('generate');

const labelElement = document.getElementById('label');

const rangeElement = document.getElementById('range');

const containerElement = document.getElementById('container-range');

buttonGenerateElement.addEventListener('click', () => {
  const newTitle = document.createElement('h' + labelElement.textContent);

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

buttonPost.addEventListener('click', () => {
  const newSpan = document.createElement('span');
  const newText = document.createElement('p');

  newText.textContent = authorText.value;

  newSpan.textContent = `Author: ${messageText.value}`;

  containerAuthorElement.append(newSpan);

  containerAuthorElement.append(newText);
});

// Crea una función que genere un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.
const buttonsColors = document.getElementById('buttons-colors');
const newContainer = document.createElement('div');

const newButtonRed = document.createElement('button');
newButtonRed.textContent = 'red';

const newButtonGreen = document.createElement('button');
newButtonGreen.textContent = 'green';

newContainer.append(newButtonRed);
newContainer.append(newButtonGreen);
buttonsColors.append(newContainer);

newButtonRed.addEventListener('click', () => {
  newContainer.classList.add('red');
});

newButtonGreen.addEventListener('click', () => {
  newContainer.classList.add('green');
});

// ## Inserción múltiple

// - Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

const fragment = document.createDocumentFragment();

const randomNumbers = () => {
  const arrayNumbers = [];

  for (let i = 0; i <= 25; i++) {
    const random = Math.floor(Math.random() * 25);

    arrayNumbers.push(random);
  }

  return arrayNumbers;
};

// - Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.
const lists = document.getElementById('lists');
const listNumbers = () => {
  const fragment = document.createDocumentFragment();
  const aleatoryNumbers = randomNumbers();
  const newUlEven = document.createElement('ul');
  const newUlOdd = document.createElement('ul');

  aleatoryNumbers.forEach(number => {
    const newLiEven = document.createElement('li');
    const newLiOdd = document.createElement('li');
    if (number % 2 === 0) {
      newLiEven.textContent = number;
      newUlEven.append(newLiEven);
    } else {
      newLiOdd.textContent = number;
      newUlOdd.append(newLiOdd);
    }
  });

  lists.append(fragment);

  lists.append(newUlEven);

  lists.append(newUlOdd);
};

listNumbers();

// Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
//   - El texto tiene X caracteres.
//   - El texto tiene X vocales.
//   - El texto tiene X consonantes.
//   - Has introducido X espacios

const textCharacter = document.getElementById('text-character');
const listCharacter = document.getElementById('list-character');

textCharacter.addEventListener('input', () => {
  const fragment = document.createDocumentFragment();
  listCharacter.textContent = '';
  const newLiCharacters = document.createElement('li');
  const newLiVowels = document.createElement('li');
  const newLiConsonants = document.createElement('li');
  const newLiSpaces = document.createElement('li');

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCounter = 0;
  let spacesCounter = 0;
  let consonantsCounter = 0;
  const characters = textCharacter.value.length;

  for (let i = 0; i <= textCharacter.value.length; i++) {
    if (vowels.includes(textCharacter.value[i])) {
      vowelsCounter = vowelsCounter + 1;
    } else if (textCharacter.value[i] === ' ') {
      spacesCounter = spacesCounter + 1;
    } else {
      consonantsCounter = consonantsCounter + 1;
    }
  }
  newLiCharacters.textContent = `El texto tiene ${characters} caracteres`;
  newLiVowels.textContent = `El texto tiene ${vowelsCounter} vocales`;
  newLiConsonants.textContent = `El texto tiene ${consonantsCounter} consonantes`;
  newLiSpaces.textContent = `El texto tiene ${spacesCounter} espacios`;
  fragment.append(newLiCharacters);
  fragment.append(newLiVowels);
  fragment.append(newLiConsonants);
  fragment.append(newLiSpaces);
  listCharacter.append(fragment);
});

// Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

const numberMultiplication = document.getElementById('number-multiplication');
const buttonMultiplication = document.getElementById('button-multiplication');
const listMultiplication = document.getElementById('list-multiplication');
let numberInput;

numberMultiplication.addEventListener('input', event => {
  numberInput = event.target.value;
  if (numberInput <= 0) {
    buttonMultiplication.disabled = true;
  } else {
    buttonMultiplication.disabled = false;
  }
});

buttonMultiplication.addEventListener('click', () => {
  listMultiplication.textContent = '';
  const fragment = document.createDocumentFragment();

  for (let i = 0; i <= 10; i++) {
    let solution = numberInput * i;
    const newLiMultiplication = document.createElement('li');
    newLiMultiplication.textContent = `${numberInput} x ${i} = ${solution}`;
    fragment.append(newLiMultiplication);
  }
  listMultiplication.append(fragment);
});

// Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

const users = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

const cardsElement = document.getElementById('cards');

const cardElement = document.createElement('div');

const cardFunction = () => {
  const fragment = document.createDocumentFragment();

  for (const user of users) {
    const newName = document.createElement('h2');
    const newAge = document.createElement('h3');
    const newUserName = document.createElement('h4');
    const newEmail = document.createElement('h5')
    const newImage = document.createElement('img');

    newName.textContent = user.name;
    cardElement.append(newName);

    newAge.textContent = user.age;
    cardElement.append(newAge);

    newUserName.textContent = user.username;
    cardElement.append(newUserName);

    newEmail.textContent = user.email;
    cardElement.append(newEmail);

    newImage.src = user.profileImage;
    cardElement.append(newImage);

    fragment.append(cardElement);
  }
  cardsElement.append(fragment);
};
cardFunction();
