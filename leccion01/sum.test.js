import { describe, expect, test } from 'vitest'
import { sum } from './sum-final'


describe("sum", () => {
  test("sum(2, 1)", () => {
    expect(sum(2, 1)).toEqual(3)
  })

  test(`sum("2", 1)`, () => {
    expect(sum("2", 1)).toEqual(3)
  })

  test(`sum(2, "1")`, () => {
    expect(sum(2, "1")).toEqual(3)
  })

  test(`sum("2", "1")`, () => {
    expect(sum("2", "1")).toEqual(3)
  })

  test(`sum(null, 1)`, () => {
    expect(sum(null, 1)).toEqual("invalid")
  })

  test(`sum(2)`, () => {
    expect(sum(2)).toEqual("invalid")
  })

  test(`sum("2", [])`, () => {
    expect(sum("2", [])).toEqual("invalid")
  })
})

describe.skip("sum Puntos Extra!!", () => {
  test(`sum(2, NaN)`, () => {
    expect(sum(2, NaN)).toEqual("invalid")
  })

  test(`Aceptar más variables sum(2, 3, 4) (Más Dificultad)`, () => {
    expect(sum(2, 3, 4)).toEqual(9)
  })
})
