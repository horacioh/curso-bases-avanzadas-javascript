module.exports = {
  sum: function sum(a, b) {
    if (
      (typeof a == "string" || typeof a == "number") &&
      (typeof b == "string" || typeof b == "number")
    ) {
      if (Object.is(a, NaN) || Object.is(b, NaN)) {
        return "invalid"
      }
      return Number(a) + Number(b)
    }
    return "invalid"
  },
}
