
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
    let textosinespacios = "";
    for(let i = 0; i < text.length; i++) {
      if(text[i] !== ' '){
        textosinespacios += text[i];   //Esta parte elimina los espacios en blanco
      }
    }
    //Crear un conjunto de signos de puntuación
    const signpuntuacion = [".", ",", ";", ":", '"', "'", "!", "¡", "?", "¿", "-", "_", "(", ")", "{", "}", "[", "]"];
    let textosinespaciosss = "";
    let contadortexto = "";
    for (let i = 0; i < textosinespacios.length; i++) {  //Esta parte elimina los signos de puntuación
      if(!signpuntuacion.includes(textosinespacios[i])) {  //si el carácter actual en la posición i de textoSinEspacios[i] no está incluido en el conjunto de signos de puntuación
        textosinespaciosss = textosinespacios.slice(0, i) + textosinespacios.slice(i + 1);   //Elimina un caracter especifico de la cadena textosinespacios y asignando una nueva cadena sin ese caracter especifico.
      }
    }
    contadortexto = textosinespacios.length;  //Contar la longitud del texto sin espacios ni signos de puntuación
    return contadortexto;  //Devolver el recuento de los caracteres ya sin espacios ni signos de puntuación
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let contador = 0;
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  //Declarando los digitos del 0 al 9
    for (let i = 0; i < text.length; i++){    //Bucle para recorrer cada caracter del texto
      if(numeros.includes(text[i])){   //Yomely aquí verificas si el caracter es un número
        contador++;  //Incremento del contador si este es un número
      }
    }
    return contador;  //Devolver el recuento de cuántos números hay en el texto
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
