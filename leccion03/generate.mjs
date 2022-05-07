import faker from "faker"
import fs from "fs"

/**
 * ⚠️ NO DEBERIAS EJECUTAR ESTE ARCHIVO! ⚠️
 * pero si quieres ver como cree el archivo de productos, eres bienvenido a probarlo!
 *
 * con el comando `node generate.mjs` generaras otro archivo nuevo.
 */

generate()

function generate() {
  const fileName = "data.json"
  var data = {
    data: Array.from(Array(100).keys()).map(populateProduct),
  }

  fs.writeFile(fileName, JSON.stringify(data), function writeCallback(err) {
    if (err) {
      throw new Error("algo salio mal con la escritura de data.")
    } else {
      console.log(`${fileName} creado correctamente!`)
    }
  })
}

function populateProduct() {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    product: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    department: faker.commerce.department(),
  }
}
