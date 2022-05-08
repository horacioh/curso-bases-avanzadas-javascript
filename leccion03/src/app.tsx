import { useMachine } from "@xstate/react";
import { productsMachine } from "./products-machine";
import { useProducts } from "./use-products";

export function App(props) {
  var [state, send] = useMachine(productsMachine);
  var { predicate, products: data } = state.context;
  const products = useProducts(data, predicate);

  return (
    <main>
      <h1>Productos Molones</h1>
      <div className="controls">
        <p className="small-text">ordenar por:</p>
        <ul>
          <li>
            <button
              className={predicate == "name" ? "button active" : "button"}
              onClick={() => send({ type: "CHANGE_ORDER", predicate: "name" })}
            >
              nombre
            </button>
          </li>
          <li>
            <button
              className={predicate == "price" ? "button active" : "button"}
              onClick={() => send({ type: "CHANGE_ORDER", predicate: "price" })}
            >
              precio
            </button>
          </li>
          <li>
            <button
              className={predicate == "department" ? "button active" : "button"}
              onClick={() =>
                send({ type: "CHANGE_ORDER", predicate: "department" })
              }
            >
              departamento
            </button>
          </li>
        </ul>
      </div>
      <ul className="products-wrapper">
        {products.map(function renderProduct(product) {
          return (
            <li key={product.id} className="product-item">
              <p>
                <span>
                  {product.name} ({product.product})
                </span>
                <span>{" - "}</span>
                <b>{product.price}</b>
                <span>{" - "}</span>
                <span>{product.department}</span>
              </p>
              <p className="small-text">{product.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
