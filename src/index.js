import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const cajaTexto = document.querySelector("textarea");
const palabra = document.querySelector("li[data-testid=word-count]");
const caracteres = document.querySelector("li[data-testid=character-count]");
const caracteresSinEspacios = document.querySelector("li[data-testid=character-no-spaces-count]");
const numeros = document.querySelector("li[data-testid=number-count]");
const suma = document.querySelector("li[data-testid=number-sum]");
const longitudMedia = document.querySelector("li[data-testid=word-length-average]");
const button = document.querySelector("reset-button");

cajaTexto.addEventListener("input", function () {
  palabra.innerHTML = "Cantidad de palabras: " + analyzer.getWordCount(cajaTexto.value);
  caracteres.innerHTML = "Cantidad de caracteres: " + analyzer.getCharacterCount(cajaTexto.value);
  caracteresSinEspacios.innerHTML = "Cantidad de caracteres sin espacios: " + analyzer.getCharacterCountExcludingSpaces(cajaTexto.value);
  numeros.innerHTML = "Números: " + analyzer.getNumberCount(cajaTexto.value);
  suma.innerHTML = "Suma de números: " + analyzer.getNumberSum(cajaTexto.value);
  longitudMedia.innerHTML = "Longitud de palabras: " + analyzer.getAverageWordLength(cajaTexto.value);

});

button.addEventListener("click", function () {
  cajaTexto.value = " ";
  palabra.innerHTML = 0;
  caracteres.innerHTML = 0;
  caracteresSinEspacios.innerHTML = 0;
  numeros.innerHTML = 0;


})