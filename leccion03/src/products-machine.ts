import { createModel } from "xstate/lib/model"
import { data } from "./data.json"

export type Product = {
  id: string
  name: string
  product: string
  price: string
  description: string
  department: string
}

export var productsModel = createModel(
  {
    predicate: null as keyof Product | null,
    products: [],
  },
  {
    events: {
      REPORT_DATA_RESOLVED: (data: Array<Product>) => ({ data }),
      CHANGE_ORDER: (predicate: string) => ({ predicate }),
    },
  }
)

export var productsMachine = productsModel.createMachine({
  initial: "idle",
  context: productsModel.initialContext,
  states: {
    idle: {
      invoke: {
        src: (context, event) => (callback, onReceive) => {
          setTimeout(() => {
            callback(productsModel.events.REPORT_DATA_RESOLVED(data))
          }, 1000)
        },
      },
      on: {
        REPORT_DATA_RESOLVED: {
          target: "ready",
          actions: productsModel.assign({
            products: (_, event) => event.data,
          }),
        },
      },
    },
    ready: {
      on: {
        CHANGE_ORDER: {
          actions: [
            productsModel.assign({
              predicate: (_, event) => event.predicate,
            }),
          ],
        },
      },
    },
  },
})
