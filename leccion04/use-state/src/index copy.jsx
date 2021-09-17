import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

let render = -1
let estados = {}
actualizar()

function useState(valor) {
  let indice = ++render

  if (estados[indice]) return estados[indice]

  function setValor(nuevoValor) {
    estados[indice][0] = nuevoValor
    actualizar()
  }

  let estado = [valor, setValor]
  estados[indice] = estado
  return estado
}

// ================================================== //

function actualizar() {
  render = -1;
  ReactDOM.render(
      <App />,
    document.getElementById('root')
  )
};

export function App() {
  return (
    <div>
      <h2>Contador</h2>
      <Contador />
      <Contador />
    </div>
  )
}

function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <div className="contador">
      <h2 style={{textAlign: 'center'}}>{valor}</h2>
      <button onClick={() => setValor(valor + 1)}>sumar</button>
      <button onClick={() => setValor(valor - 1)}>restar</button>
    </div>
  )
}