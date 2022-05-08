import { describe, expect, test } from "vitest";
import { Contador } from "./contador";
import { SuperContador } from "./contador-extra";

describe("Contador", () => {
  let contador = Contador();

  test("Debe crear un contador", () => {
    expect(typeof contador.sumar).toBe("function");
    expect(typeof contador.restar).toBe("function");
    expect(typeof contador.reset).toBe("function");
    expect(typeof contador.printValue).toBe("function");
  });

  test("Debe sumar al valor del contador", () => {
    contador.sumar();
    contador.sumar();
    contador.sumar();
    expect(contador.printValue()).toBe(3);
  });

  test("Debe restar al valor del contador", () => {
    contador.restar();
    expect(contador.printValue()).toBe(2);
  });

  test("Debe reiniciar el valor del contador", () => {
    contador.reset();
    expect(contador.printValue()).toBe(0);
  });

  test("Debe mantener el valor del contador oculto", () => {
    expect(typeof contador.valor).toBeUndefined;
  });

  // Créditos extra

  describe("Créditos extra", () => {
    test("SuperContador (de 3 en 3)", () => {
      let contador = SuperContador(0);
      let porTres = contador(3);

      porTres.sumar();
      porTres.sumar();
      porTres.sumar();
      porTres.restar();

      expect(porTres.printValue()).toBe(6);
    });

    test("SuperContador (de 4 en 4)", () => {
      let contador = SuperContador();
      let porTres = contador(3);

      porTres.sumar();
      porTres.reset();
      porTres.sumar();
      porTres.sumar();
      porTres.restar();

      expect(porTres.printValue()).toBe(3);
    });

    test("Iniciar el contador en un numero determinado", () => {
      let contador = SuperContador(2);
      let porCuatro = contador(4);

      porCuatro.sumar();
      porCuatro.sumar();
      porCuatro.sumar();
      porCuatro.restar();

      expect(porCuatro.printValue()).toBe(10);
    });

    test("Al iniciar el contador en un numero determinado, `reset` debe asignar este valor nuevamente, no cero (0)", () => {
      let contador = SuperContador(2);
      let porCuatro = contador(4);

      porCuatro.sumar();
      porCuatro.sumar();
      porCuatro.reset();

      expect(porCuatro.printValue()).toBe(2);
    });
  });
});
