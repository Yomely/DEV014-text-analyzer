import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const cajaTexto = document.querySelector("textarea");
const palabra = document.getElementById("palabras");
const caracteres = document.getElementById("caracteres");
const caracteresSinEspacios = document.getElementById("caracteresSinEspacios");
const numeros = document.getElementById("numeros");
const suma = document.getElementById("suma");
const longitudMedia = document.getElementById("longitudMedia");
const button = document.getElementById("reset-button");

cajaTexto.addEventListener("input", function(){
palabra.innerHTML = analyzer.getWordCount(cajaTexto.value);
caracteres.innerHTML = analyzer.getCharacterCount(cajaTexto.value);
caracteresSinEspacios.innerHTML = analyzer.getCharacterCountExcludingSpaces(cajaTexto.value);
numeros.innerHTML = analyzer.getNumberCount(cajaTexto.value);
suma.innerHTML = analyzer.getNumberSum(cajaTexto.value);
longitudMedia.innerHTML = analyzer.getAverageWordLength(cajaTexto.value);

});

button.addEventListener('click', function(){
cajaTexto.value = "";
palabra.innerHTML = 0;
caracteres.innerHTML = 0;
caracteresSinEspacios.innerHTML = 0;
numeros.innerHTML = 0;


})