const Object = require("./custom-object")

describe("Object.is", () => {
  test("42", () => {
    expect(Object.is(42, 42)).toEqual(true)
  })

  test('"foo"', () => {
    expect(Object.is("foo", "foo")).toEqual(true)
  })

  test("false", () => {
    expect(Object.is(false, false)).toEqual(true)
  })

  test("null", () => {
    expect(Object.is(null, null)).toEqual(true)
  })

  test("undefined", () => {
    expect(Object.is(undefined, undefined)).toEqual(true)
  })

  test("NaN", () => {
    expect(Object.is(NaN, NaN)).toEqual(true)
  })

  test("-0", () => {
    expect(Object.is(-0, -0)).toEqual(true)
  })

  test("0", () => {
    expect(Object.is(0, 0)).toEqual(true)
  })

  test("-0 y 0", () => {
    expect(Object.is(-0, 0)).toEqual(false)
  })

  test("0 y -0", () => {
    expect(Object.is(0, -0)).toEqual(false)
  })

  test("0 y NaN", () => {
    expect(Object.is(0, NaN)).toEqual(false)
  })

  test("NaN y 0", () => {
    expect(Object.is(NaN, 0)).toEqual(false)
  })

  test("42 y '42'", () => {
    expect(Object.is(42, "42")).toEqual(false)
  })

  test("'42' y 42", () => {
    expect(Object.is("42", 42)).toEqual(false)
  })

  test("'foo' y 'bar'", () => {
    expect(Object.is("foo", "bar")).toEqual(false)
  })

  test("false y true", () => {
    expect(Object.is(false, true)).toEqual(false)
  })

  test("null y undefined", () => {
    expect(Object.is(null, undefined)).toEqual(false)
  })

  test("undefined y null", () => {
    expect(Object.is(undefined, null)).toEqual(false)
  })
})
