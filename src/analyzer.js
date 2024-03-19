
const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arregpalabras = text.trim().split(" ");      //Elimina los espacios del principio y fin, después divide el texto usando split(' ')
    let contadorpalabras = 0;                          //Es una variable local para ver sólo en está función y la vamos a utilizar para indicar 
    for (let i = 0; i < arregpalabras.length; i++) {
      const ultimocaracter = arregpalabras[i].slice(-1)
      if (arregpalabras[i].slice(-1) === '.') {
        return ultimocaracter;
      }
      if(isNaN(arregpalabras [i])) {
        contadorpalabras = contadorpalabras + 0;
      } else {
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
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        textosinespacios += text[i];   //Esta parte elimina los espacios en blanco
      }
    }
    //Crear un conjunto de signos de puntuación
    const signpuntuacion = [".", ",", ";", ":", '"', "'", "!", "¡", "?", "¿", "-", "_", "(", ")", "{", "}", "[", "]"];
    let textosinespaciosss = "";
    let contadortexto = 0;
    for (let i = 0; i < textosinespacios.length; i++) {  //Esta parte elimina los signos de puntuación
      if (!signpuntuacion.includes(textosinespacios[i])) {  //si el carácter actual en la posición i de textoSinEspacios[i] no está incluido en el conjunto de signos de puntuación
        //textosinespaciosss = textosinespacios.slice(0, i) + textosinespacios.slice(i + 1);   //Elimina un caracter especifico de la cadena textosinespacios y asignando una nueva cadena sin ese caracter especifico.
        textosinespaciosss += textosinespacios[i];
      }
    }
    contadortexto = textosinespaciosss.length;  //Contar la longitud del texto sin espacios ni signos de puntuación
    return contadortexto;  //Devolver el recuento de los caracteres ya sin espacios ni signos de puntuación
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palab = text.split(" ");              //Dividiendo los caracteres en palabras
    let totalcaracteres = 0;
    for (const palabra of palab) {                //Calculando la longitud total de todas las palabras
      totalcaracteres += palabra.length;
    }
    const longitudmedia = totalcaracteres / palab.length;        //Calculando la longitud media
    const longitudmediaredondeada = longitudmedia.toFixed(2);    //La redondeamos a sólo 2 digitos después del punto.
    return longitudmediaredondeada;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const arregpalabras = text.trim().split(" ");
    let contador = 0;
  
    // Recorrer cada carácter del texto
    for (let i = 0; i < arregpalabras.length; i++) {
      const ultimocaracter = arregpalabras[i].slice(-1);
      if(arregpalabras[i].slice(-1) === '.') {
        return ultimocaracter;
      }
      if(isNaN(arregpalabras[i])) {
        contador = contador + 0;
      } else {
        contador = contador + 1;
      }
    }

    // Devolver el recuento de números al usuario
    return contador;

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const arregtexto = text.split(" ");           //Declarando y Transformando a un arreglo
    let suma = 0;
    for (let i = 0; i < arregtexto.length; i++) {    //Bucle para recorrer cada caracter del texto
      if (!isNaN(Number(arregtexto[i]))) {     //Convertir el caracter a número y adicionarlo a la suma total
        suma += Number(arregtexto[i]);
      }                             
    }
    return suma;                                 //Devolver la suma total de todos los número que hay en el texto.
  },
};

export default analyzer;
