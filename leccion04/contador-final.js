export function Contador(valorInicial = 0) {

  /**
   * 
   * El contador debe tener un sitio en donde guarde el valor de sí mismo. Necesitamos una variable.
   * 
   * Debemos devolver de esta funcion 4 funciones para poder operar con el contador:
   * - sumar: aumenta por 1 el contador
   * - restar: disminuye por 1 el contador
   * - reset: fija el contador a cero (0)
   * - printValue: devuelve el valor actual del contador
   * 
   */
  // 

  let valor = valorInicial

  return {
    sumar,
    restar,
    printValue,
    reset
  }

  // ====================

  function sumar() {
    valor += 1
  }

  function restar() {
    valor -= 1
  }

  function reset() {
    valor = 0
  }

  function printValue() {
    return valor
  }
}