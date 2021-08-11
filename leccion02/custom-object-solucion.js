module.exports = {
  ...Object,
  is: ObjectIs,
}

function ObjectIs(x, y) {
  var xCeroNegativo = esCeroNegativo(x);
  var yCeroNegativo = esCeroNegativo(y);

  if (xCeroNegativo || yCeroNegativo) {
    return xCeroNegativo && yCeroNegativo;
  }

  else if (esNaN(x) && esNaN(y)) {
    return true;
  }

  else if (x === y) {
    return true;
  }

  return false;
}

function esCeroNegativo(x) {
  return x === 0 && (1 / x) === -Infinity;
}

function esNaN(x) {
  return x !== x;
}
