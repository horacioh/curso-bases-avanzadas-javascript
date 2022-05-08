export function ObjectIs(x, y) {
  var xCeroNegativo = esCeroNegativo(x)
  var yCeroNegativo = esCeroNegativo(y)

  if (xCeroNegativo || yCeroNegativo) {
    return xCeroNegativo && yCeroNegativo
  } else if (esNaN(x) && esNaN(y)) {
    return true
  } else if (x === y) {
    return true
  }

  return false
}

function esCeroNegativo(x) {
  return x === 0 && 1 / x === -Infinity
}

function esNaN(x) {
  return x !== x
}

/**
 * 
export function ObjectIs(a, b) {
  console.log(a, b);

  if (a === b) {
    console.log('===');

    // devuelve `true` si `a` y `b` no son `0`
    // O
    // `a` y `b` son `0` del mismo simbolo 
    // esto cubre los casos 1 y 2
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // devuelve true si la evaluación de ambos `a` y `b` resulta en `NaN`
    // La única posibilidad de que una variable no sea estrictamente igual a sí misma es cuando esa variable se evalúa como NaN (ejemplo: Número.NaN, 0/0, NaN).
    // esto cubre los casos 3
    return a !== a && b !== b;
  }
}

*/