function Contador(paso = 1) {

  let valor = 0

  return {
    sumar,
    restar,
    printValue,
    reset
  }

  // ====================

  function sumar() {
    valor += paso
  }

  function restar() {
    valor -= paso
  }

  function reset() {
    valor = valorInicial
  }

  function printValue() {
    return valor
  }
}

/**
   * Créditos extra
   * 
   * Como podriamos crear un contador que aumente o disminuya el valor por un numero determinado? ¿Cómo harías para hacer un contador que vaya de 3 en 3?
   */
// ...

export function SuperContador(valorInicial = 0) {

  // ...

}