function wrapping(gifts) {
    const arrayRegalos = [];
  gifts.forEach(strPalabra => {
    let intCantidadCarac = strPalabra.length;
    let caracter = '*';
    let asteriscos = caracter.repeat(intCantidadCarac + 2);
    let resultado = `${asteriscos}\n*${strPalabra}*\n${asteriscos}`;
    arrayRegalos.push(resultado);
  });
  return arrayRegalos;
}
