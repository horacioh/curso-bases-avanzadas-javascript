import { describe, expect, test } from "vitest";
import { ObjectIs } from "./custom-object";

describe("ObjectIs", () => {
  describe("1. Casos iguales a usar ===", () => {
    var foo = { a: 1 };
    var bar = { a: 1 };

    test("42", () => {
      expect(ObjectIs(42, 42)).toEqual(true);
    });

    test('"foo"', () => {
      expect(ObjectIs("foo", "foo")).toEqual(true);
    });

    test("null", () => {
      expect(ObjectIs(null, null)).toEqual(true);
    });

    test("undefined", () => {
      expect(ObjectIs(undefined, undefined)).toEqual(true);
    });

    test("[]", () => {
      expect(ObjectIs([], [])).toEqual(false);
    });

    test("Objeto foo", () => {
      expect(ObjectIs(foo, foo)).toEqual(true);
    });

    test("Objeto foo y bar", () => {
      expect(ObjectIs(foo, bar)).toEqual(false);
    });

    test("false", () => {
      expect(ObjectIs(false, false)).toEqual(true);
    });
  });

  describe("2. Casos con Símbolo en el 0", () => {
    test("-0", () => {
      expect(ObjectIs(-0, -0)).toEqual(true);
    });

    test("0", () => {
      expect(ObjectIs(0, 0)).toEqual(true);
    });

    test("-0 y 0", () => {
      expect(ObjectIs(-0, 0)).toEqual(false);
    });

    test("0 y -0", () => {
      expect(ObjectIs(0, -0)).toEqual(false);
    });

    test("0n y -0n", () => {
      expect(ObjectIs(0n, -0n)).toEqual(true);
    });
  });
  describe("3. Casos con NaN", () => {
    test("NaN", () => {
      expect(ObjectIs(NaN, NaN)).toEqual(true);
    });

    test("0 y NaN", () => {
      expect(ObjectIs(0, NaN)).toEqual(false);
    });

    test("NaN y 0", () => {
      expect(ObjectIs(NaN, 0)).toEqual(false);
    });
  });

  describe("4. Otros Casos", () => {
    test('"foo" y "bar"', () => {
      expect(ObjectIs("foo", "bar")).toEqual(false);
    });

    test("42 y '42'", () => {
      expect(ObjectIs(42, "42")).toEqual(false);
    });

    test("'42' y 42", () => {
      expect(ObjectIs("42", 42)).toEqual(false);
    });

    test("false y true", () => {
      expect(ObjectIs(false, true)).toEqual(false);
    });

    test("null y undefined", () => {
      expect(ObjectIs(null, undefined)).toEqual(false);
    });

    test("undefined y null", () => {
      expect(ObjectIs(undefined, null)).toEqual(false);
    });
  });
});
