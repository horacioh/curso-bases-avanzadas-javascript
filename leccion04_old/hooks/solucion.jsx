const MiReact = (function() {
  let hooks = []
  let currentHook = 0
  return {
    render(Component) {
      const Comp = Component()
      Comp.render()
      currentHook = 0
      return Comp
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue
      const setStateHookIndex = currentHook
      const setState = newState => (hooks[setStateHookIndex] = newState)
      return [hooks[currentHook++], setState]
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray
      const deps = hooks[currentHook]
      const hasChangedDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true
      if (hasNoDeps || hasChangedDeps) {
        callback()
        hooks[currentHook] = depArray
      }
      currentHook++
    },
  }
})()

function Counter() {
  debugger;
  const [count, setCount] = MiReact.useState(0)
  const [text, setText] = MiReact.useState('foo')
  MiReact.useEffect(() => {
    console.log('effect', count, text)
  }, [count, text])
  return {
    sumar: () => setCount(count + 1),
    escribir: txt => setText(txt),
    noop: () => setCount(count),
    render: () => console.log('render', { count })
  }
}
let App
App = MiReact.render(Counter)
App.sumar()
App = MiReact.render(Counter)
App.escribir('bar')
App = MiReact.render(Counter)
App.noop()
App = MiReact.render(Counter)
App.sumar()
App = MiReact.render(Counter)