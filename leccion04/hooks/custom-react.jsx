const CustomReact = (function CustomReact() {
  /**
   * en nuestro CustomReact es donde debemos crear nuestra "variable provada" para crear nuestro "closure". Necesitamos guardar dos valores:
   * - un arreglo con todos los "hooks" que nuestro componente implemente
   * - un numero que guarde el indice del hook que estamos ejecutando.
   * 
   * ¿Porqué crees que es necesario guardar el indice? 🤔
   */

  // let ...
  // let ...

  return {
    useState(valorInicial) {
      /**
       * 2. Cada vez que renderizemos nuestro componente, ejecutaremos esta funcion. HINT: donde podemos guardar un valor que podamos referirnos a el luego?? ;)
       */

      // es importante guardar una referencia a el hook que estamos ejecutando para poder usarlo dentro de nuestra función `useState` luego
      let hookIndice = current

      function setState(nuevoValor) {
        /**
         * 3. Debemos guardar el valor que pasamos en nuestro arreglo de "hooks"
         */
      }

      /**
       * 4. useState debe devolver un arreglo con dos valores:
       * - el primero es el valor del hook
       * - el segundo es el `setState` que definimos arriba
       * 
       * HINT 1: 
       */
      return [hooks[current++], setState]
    },
    render(Component) {
      /**
       * la function `render` simula la renderización de los componentes de nuestra aplica
       */
      const Comp = Component()
      Comp.render()
      current = 0
      return Comp
    },
  }
})()

function Counter() {
  let [count, setCount] = CustomReact.useState(0)
  return {
    sumar: () => setCount(count + 1),
    noop: () => setCount(count),
    render: () => console.log('render', { count })
  }
}

var App
App = CustomReact.render(Counter) // render { count: 0 }
App.sumar() // suma 1 a count
App = CustomReact.render(Counter) // render { count: 1 }
App.noop() // count no deveria cambiar
App = CustomReact.render(Counter) // render { count: 1 }
App.sumar() // suma 1 a count
App = CustomReact.render(Counter) // render { count: 2 }