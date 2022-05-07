import { Product } from "./products-machine"

export function useProducts(
  data: Array<Product>,
  predicate: keyof Product
): Array<Product> {
  if (!predicate) return data

  return data.sort((productA: Product, productB: Product) => {
    switch (predicate) {
      case "price":
        return parseInt(productA.price) - parseInt(productB.price)
      default:
        return productA[predicate].localeCompare(productB[predicate])
    }
  })
}
