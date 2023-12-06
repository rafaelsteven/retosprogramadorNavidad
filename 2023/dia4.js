/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.
*/
function decode(message) {
    let resultado = '';
    let tamArray = [];
    let numtamano = -1;
    let temTex = '';
    for (let char of message) {
        if (char == '(') {
            numtamano++;
            tamArray[numtamano] = ''; 

        } else if (char == ')') {
            
            if (numtamano == 0 ) {
                
                resultado += tamArray[numtamano].split('').
                              reverse().join('')+temTex;
                numtamano--; 
            } else if (numtamano == 1) {
                if(temTex !== '')
                {
                    temTex = tamArray[numtamano] + temTex;
                }
                else
                {
                    temTex = tamArray[numtamano] + 
                    tamArray[0].split('').
                    reverse().join('');
                }
                tamArray[0] = '';
                tamArray[numtamano] = '';
                numtamano --; 
            } 
        } else if (numtamano >= 0) {
                tamArray[numtamano] += char;
        } else {
            resultado += char;
        }
    }

    return resultado;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!