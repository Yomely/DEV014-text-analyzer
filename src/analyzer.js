
const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arregpalabras = text.split(" ");
    let contadorpalabras = 0; //Es una variable local para ver sólo en está función y la vamos a utilizar para indicar 
    for (let i = 0; i < arregpalabras.length; i++) {
      if (arregpalabras[i] !== "") {
        contadorpalabras = contadorpalabras + 1;
      }
    }
    return contadorpalabras;
  }, 
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const arregpalabras = text.split("");
    let contadorpalabras = 0;
    for (let i = 0; i < arregpalabras.length; i++) {
      if (arregpalabras[i] !== " ") {
        contadorpalabras = contadorpalabras + 1;
      }
    }
    return contadorpalabras;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
