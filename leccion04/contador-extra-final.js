function Contador(paso = 1) {


}

/**
   * Créditos extra
   * 
   * Como podriamos crear un contador que aumente o disminuya el valor por un numero determinado? ¿Cómo harías para hacer un contador que vaya de 3 en 3?
   */
// ...

export function SuperContador(paso = 1) {

  return function Contador(valorInicial = 0) {

    let valor = valorInicial

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
      valor = 0
    }

    function printValue() {
      return valor
    }
  }

}