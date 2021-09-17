const {Object} = require("./custom-object")

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
    expect(sum(null, 1)).toEqual('invalid')
  })

  test(`sum(2)`, () => {
    expect(sum(2)).toEqual('invalid')
  })

  test(`sum("2", [])`, () => {
    expect(sum('2', [])).toEqual('invalid')
  })
})

describe('sum Extra Points', () => {
  test.skip(`sum(2, NaN)`, () => {
    expect(sum(2, NaN)).toEqual('invalid')
  })
})
