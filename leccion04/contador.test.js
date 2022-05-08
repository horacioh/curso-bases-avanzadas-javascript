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

  describe.skip("Créditos extra", () => {
    test("SuperContador (de 3 en 3)", () => {
      let porTres = SuperContador(3);
      let contador = porTres();

      contador.sumar();
      contador.sumar();
      contador.sumar();
      contador.restar();

      expect(contador.printValue()).toBe(6);
    });

    test("SuperContador (de 4 en 4)", () => {
      let porCuatro = SuperContador(4);
      let contador = porCuatro();

      contador.sumar();
      contador.reset();
      contador.sumar();
      contador.sumar();
      contador.restar();

      expect(contador.printValue()).toBe(4);
    });

    test("Iniciar el contador en un numero determinado", () => {
      let porCuatro = SuperContador(4);
      let contador = porCuatro(2);

      contador.sumar();
      contador.sumar();
      contador.sumar();
      contador.restar();

      expect(contador.printValue()).toBe(10);
    });
  });
});
