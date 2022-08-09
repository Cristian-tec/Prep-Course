// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = [];

  arreglo = Object.entries(objeto);
  return arreglo;
  /*   arreglo = "["
    for (const clave in objeto) {
      arreglo+= '[' + clave + ', ' + objeto[clave] +  ']';
      //console.log(clave);
      //console.log(objeto[clave]);
      arreglo+=", "
    }
    arreglo += "]";
    return arreglo; */
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var tam = string.length;
  var convertido = string.split('');
  var objeto = {};
  var cont = 0;
  var flag = true;
  var letra = '';

  for (var i = 0; i < tam; i++) {

    letra = convertido[i];

    for (const clave in objeto) {
      if (letra != ('"' + clave + '"')) { //letra devuelve en el formato "a" y clave solo a
        flag = true;
      }
    }

    if (flag == true) {
      for (var j = 0; j < tam; j++) {
        if (letra == convertido[j]) {
          cont++;
        }
      }
      objeto[letra] = cont;
      cont = 0;
    }
    flag = false;
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //Por favor cambiar el enunciado, no es realiza una funcion, seria la funcion recibe s

  var tam = s.length;
  var texto1 = "";
  var texto2 = "";

  for (var i = 0; i < tam; i++) {
    if (s[i] == s[i].toUpperCase()) {
      texto1 += s[i];
    } else {
      texto2 += s[i];
    }
  }
  return texto1 + texto2;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var tam = str.length;
  var cont_esp = 0;
  var cont = 0;
  var pal = "";
  var pos = 0;
  var last_pos = 0;
  var total = "";

  for (var i = 0; i < tam; i++) {

    if (str[i] == ' ' || i == tam - 1) {
      console.log("detecto espacio");
      if (i == tam - 1) {
        for (var j = i; j >= last_pos; j--) {
          pal += str[j];
        }

      } else {
        for (var j = i - 1; j >= last_pos; j--) {
          pal += str[j];
        }
      }
      last_pos = i + 1;
      if (i != tam - 1) {
        pal += " ";
      }
      total += pal;
      pal = "";
    }
  } return total;
}



function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var conv = numero.toString();
  var tam = conv.length;
  var inv = "";

  for (var i = tam - 1; i >= 0; i--) {
    inv += conv[i];
  }
  if (conv == inv) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //por algun motivo borro el ; del return y da passed luego lo vuelvo a colocar y da passed....
  //no se porque lo hace...esto me llevo a perder muchisimo tiempo.....

  var tam = cadena.length;
  var texto = "";

  for (var i = 0; i < tam; i++) {
    if (cadena[i] == 'a' || cadena[i] == 'b' || cadena[i] == 'c') {
      texto[i] = "";
    } else {
      texto += cadena[i];
    }
  }
  return texto;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //aunque a veces esto puede no funcionar......

  arr.sort(function(a, b){return a.length - b.length});
  return arr;
  /* var arr = ["You", "are", "beautiful", "looking"];
  var tam = arr.length;
  var nuevo = [];
  var last = arr[0];

  for (var i = 0; i < tam; i++) {

    for (var j = i + 1; j < tam; j++) {
      if (last.length < arr[j].length) {
        nuevo[i] = arr[j];
        last = nuevo[i];
        arr[i]=arr[j];

      } else {
        nuevo[i] = arr[i];
        last = nuevo[i];
      }

    }

  } */
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  


  var devolver = arreglo1.filter(x => arreglo2.indexOf(x) != -1);
  return devolver;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

