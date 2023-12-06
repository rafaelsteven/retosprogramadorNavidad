/*

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars.

*/

function cyberReindeer(road, time) {
    const arrayResultado = [];
      let contadorslash = 4;
      let pasos = -1;
      let banderaPalo = true;
      for (let index = 0; index < time; index++) 
      {
          let strTemRoad = road;
          if(road[index] == '|')
          {
              banderaPalo = false;
          }
          if(!road.includes('|') || banderaPalo)
          {
              pasos++;
              // charActual = road[index];
              let charAnterior = '';
              if (pasos !== 0 )
              {
                  charAnterior = road[pasos - 1];
                  strTemRoad = strTemRoad.substring(0, pasos - 1) +
                  charAnterior + strTemRoad.substring(pasos)
              }
              else
              {
                  road = strTemRoad.substring(0, pasos) + '.' +
                  road.substring(pasos + 1);
              }
              strTemRoad = road.substring(0, pasos) + 'S' +
              road.substring(pasos + 1);
              
          }
          else
          {
              strTemRoad = road.substring(0, pasos) + 'S' +
              road.substring(pasos + 1);
          }
          if(contadorslash == index)
          {
              road = road.replace(/\|/g, '*');
          }
  
          arrayResultado.push(strTemRoad);
          
      }
      return arrayResultado;
  }
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);