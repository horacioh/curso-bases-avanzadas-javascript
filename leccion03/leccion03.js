
console.log(usandoLet())
console.log(usandoConst())
loop()

/**
 * 1. ¿Por qué el siguiente código al ejecutarlo da un error?
 */

function usandoLet() {
  console.log(typeof variable)
  let variable = 'hola'
}

/**
 * 2. ¿Habrá alguna diferencia si cambiamos de `let` a `const`?
 * 
 * ✍️ Escribe tu respuesta aquí!
 */

/**
 * `const` no es de Valor constante
 */

function usandoConst() {
  const usuario = {
    dispositivos: []
  }

  // 3. Si descomentamos la siguiente línea de código, veremos un error
  // usuario = 'foo'

  // 4. pero la siguiente línea NO produce un error. Puedes explicar porqué pasa esto?
  // usuario.dispositivos.push({name: 'macbook pro'})

  return usuario
}

/**
 * Créditos Extra
 * 
 * 5. Asegúrate de que en la consola puedas ver todos los valores al ejecutar la función
 */

function loop() {

  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (let i = 0; i < values.length; i++) {
    setTimeout(() => {
      let value = i + 1
      console.log('Voy por el elemento #' + value);
    }, 1);

  }
}

/**
 * 6. ¿Qué puedes hacer para que `usuario.dispositivos.push({name: 'macbook pro'})` no se pueda hacer?
 */