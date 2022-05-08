const CustomReact = (function CustomReact() {
  let hooks = []
  let current = 0

  return {
    useState(valorInicial) {
      hooks[current] = hooks[current] || valorInicial
      let hookIndice = current

      function setState(nuevoValor) {
        hooks[hookIndice] = nuevoValor
      }

      return [hooks[current++], setState]
    },
    render(Component) {
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