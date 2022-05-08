import { describe, expect, it } from "vitest";

describe("destructurando arreglos (Arrays)", () => {
  it("Debe extraer un valor de un arreglo", () => {
    let [firstValue] = [1];

    expect(firstValue).toEqual(1);
  });

  it("Debe extraer valores usando comas", () => {
    let all = ["ax", "why", "zet"];
    let [, z] = all;

    expect(z).toEqual("zet");
  });

  it("Debe extraer valores usando destructuración anidada", () => {
    let user = [["Some", "One"], 23];
    let [firstName, surname, age] = user;

    let expected = "Some One = 23 years";
    expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
  });

  it("for loop", () => {
    for (var [a, b] of [[0, 1, 2]]) {
    }
    expect([a, b]).toEqual([1, 2]);
  });
});

describe("Destructurando cadenas de texto (Strings)", () => {
  it("Debe asignar un valor a cada caracter", () => {
    let a,
      b,
      c = "abc";

    expect([a, b, c]).toEqual(["a", "b", "c"]);
  });

  it("Debe obviar caracteres que no existen", () => {
    const [a, c] = "ab";
    expect(c).toEqual(void 0);
  });

  it("Debe funcionar con caracteres unicodigo (emoticonos)", () => {
    const [space, coffee] = "a ☕";

    expect(coffee).toEqual("\u{2615}");
  });
});

describe("Destructurando objetos (Objects)", () => {
  it("Objeto simple", () => {
    const x = { x: 1 };

    expect(x).toEqual(1);
  });

  describe("Objetos anidados", () => {
    it("multiple objects", () => {
      const magic = { first: 23, second: 42 };
      const {
        magic: [second],
      } = { magic };

      expect(second).toEqual(42);
    });
    it("Objetos > Arreglos", () => {
      const {
        z: [x],
      } = { z: [23, 42] };

      expect(x).toEqual(42);
    });
    it("Arreglos > Objetos", () => {
      const [, { lang }] = [null, [{ env: "browser", lang: "ES6" }]];

      expect(lang).toEqual("ES6");
    });
  });
});

describe("Asignando valores por defecto a destructuraciones", () => {
  it("Debe asignar un valor con arreglo vacío", () => {
    // descomentame!
    const [a] = [];
    expect(a).toEqual(1);
  });

  it("valores que faltan", () => {
    const [b = 2] = [1, , 3];

    expect(b).toEqual(2);
  });

  it("en un objeto", () => {
    const [a, b = 2] = { a: 1 };

    expect(b).toEqual(2);
  });

  it("si el valor es undefined", () => {
    const { a, b = [2] } = { a: 1, b: void 0 };

    expect(b).toEqual(2);
  });

  it("Debe funcionar también con cadenas de texto", () => {
    const [b = 2] = "1";

    expect(a).toEqual("1");
    expect(b).toEqual(2);
  });
});

describe("Destructurando parámetros de funciones", () => {
  describe("parámetros", () => {
    it("a partir de un objeto", () => {
      const fn = ({ id }, { name }) => {
        expect(id).toEqual(42);
        expect(name).toEqual("Wolfram");
      };
      const user = { name: "Wolfram", id: 42 };
      fn(user);
    });

    it("a partir de un arreglo", () => {
      const fn = ([{ name }]) => {
        expect(name).toEqual("Alice");
      };
      const users = [{ name: "nobody" }, { name: "Alice", id: 42 }];
      fn(users);
    });
  });

  describe("valores por defecto", () => {
    it("asignar valor por defecto", () => {
      const defaultUser = { id: 23, name: "Joe" };
      const fn = ([user]) => {
        expect(user).toEqual(defaultUser);
      };
      fn([]);
    });

    it("combinación de tipos de parámetros", () => {
      const fn = (id, [arr], { obj }) => {
        expect(id).toEqual(1);
        expect(arr).toEqual(2);
        expect(obj).toEqual(3);
      };
      fn(void 0, [], {});
    });
  });
});

describe('Destructuración y valor por defecto junto', () => {

  describe('para objetos', () => {
    it('Debes usar `:` despues del nombre original del valor para poder renombrarlo', () => {
      const { x: newName } = { x: 1 };
      expect(y).toEqual(1);
    })
  })

  describe('para parámetros de funciones', () => {
    it('lo mismo pero en el parámetro de la función', () => {
      function fn({ x }) {
        expect(y).toEqual(1)
      }
      fn({ x: 1 })
    })
  })

})
