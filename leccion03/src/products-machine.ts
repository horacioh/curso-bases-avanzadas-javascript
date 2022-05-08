import { assign, createMachine } from "xstate"
import { data } from './data.json'

export type Product = {
  id: string
  name: string
  product: string
  price: string
  description: string
  department: string
}

type ProductsMachineContext = {
  predicate: keyof Product | null,
  products: Array<Product>,
}

type ProductsMachineEvent = {
  type: 'REPORT_DATA_RESOLVED',
  data: Array<Product>
} | {
  type: 'CHANGE_PREDICATE',
  predicate: keyof Product
}

export var productsMachine = createMachine({
  tsTypes: {} as import("./products-machine.typegen").Typegen0,
  schema: {
    context: {} as ProductsMachineContext,
    events: {} as ProductsMachineEvent
  },
  initial: "idle",
  context: {
    predicate: null,
    products: []
  },
  states: {
    idle: {
      invoke: {
        src: 'fetchProducts',
        id: 'fetchProducts'
      },
      on: {
        REPORT_DATA_RESOLVED: {
          target: "ready",
          actions: ['assignProducts']
        },
      },
    },
    ready: {
      on: {
        CHANGE_PREDICATE: {
          actions: ['assignPredicate'],
        },
      },
    },
  },
}, {
  actions: {
    assignPredicate: assign({
      predicate: (_, event) => event.predicate,
    }),
    assignProducts: assign({
      products: (_, event) => event.data,
    })
  },
  services: {
    fetchProducts: () => (sendBack) => {
      setTimeout(() => {
        sendBack({
          type: 'REPORT_DATA_RESOLVED', data
        })
      }, 1000)
    }
  }
})
