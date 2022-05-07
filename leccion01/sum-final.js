export function sum(a, b) {
  if (
    (typeof a == "string" || typeof a == "number") &&
    (typeof b == "string" || typeof b == "number")
  ) {
    if (Object.is(a, NaN) || Object.is(b, NaN)) {
      return "invalid"
    }
    return Number(a) + Number(b)
  }
  return "invalid"
}

/**
 * Puntos Extra!!
 * comenta la funcion anterior y descomenta esta para ver que los tests pasan
 *  
export function sum(...args) {

  if (args.length < 2) return 'invalid'

  let result = 0
  let index = 0

  while (index < args.length) {
    let currentValue = args[index]
    if (typeof currentValue == 'string' || typeof currentValue == 'number') {
      if (Object.is(currentValue, NaN)) {
        return 'invalid'
      }
      result += Number(currentValue)
    } else {
      return 'invalid'
    }

    index++
  }

  return result
}
*/