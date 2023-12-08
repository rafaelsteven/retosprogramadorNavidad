/*

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')


   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####


drawGift(5, '*')

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####


drawGift(1, '^')

#

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

*/
function drawGift(size, symbol) {
    // Calcula el tamaño del fondo restando 2 al tamaño total.
    let bgSize = size - 2;
    
    // Ajusta el tamaño del fondo para asegurarse de que siempre sea al menos 1.
    bgSize += +!(bgSize + 1);

    let response = "";
  
    // Inicializa variables para almacenar las partes superior e inferior del regalo.
    let topCenter = "";
    let bottomCenter = "";

    for (const a of [...Array.from({ length: bgSize }).keys()]) {
      // Construye una cadena con el patrón para cada nivel del regalo.
      const c =
        "#" + symbol.repeat(bgSize) + "#" + symbol.repeat(a) + "#";
      
      // Construye la parte inferior del regalo concatenando la cadena construida en cada iteración.
      bottomCenter = c + "\n" + bottomCenter;
  
      // Construye la parte superior del regalo concatenando la cadena construida en cada iteración,
      // con espacios para centrarla correctamente.
      topCenter += " ".repeat(bgSize - a) + c + "\n";
    }
  
    // Construye la representación completa del regalo.
    response =
      " ".repeat(size - 1) + "#".repeat(size) + "\n" +
      // Repite la parte superior e inferior del regalo de acuerdo con el tamaño especificado.
      (topCenter +
        "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n" +
        bottomCenter +
        "#".repeat(size) + "\n").repeat(+!!(size - 1));
  
    return response;
  }
console.log(drawGift(5, '+'));