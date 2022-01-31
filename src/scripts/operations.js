class Operations {
  static plus = (a, b) => {
    return parseFloat((a + b).toPrecision(12)).toString()
  }

  static minus = (a, b) => {
    return parseFloat((a - b).toPrecision(12)).toString()
  }

  static multiplication = (a, b) => {
    return parseFloat((a * b).toPrecision(12)).toString()
  }

  static divide = (a, b) => {
    return b === 0 ? "Error" : parseFloat((a / b).toPrecision(12)).toString()
  }

  static exponentiation = (a, b) => {
    return parseFloat((a ** b).toPrecision(12)).toString()
  }

  static sqrt = (a) => {
    return a >= 0 ? Math.sqrt(a).toString() : "Error"
  }

  static sqrt3 = (a) => {
    return (a ** (1 / 3)).toString()
  }

  static log = (a) => {
    return Math.log(a).toString()
  }

  static logX10 = (a) => {
    return (Math.log(a) / Math.log(10)).toString()
  }

  static percent = (a, b) => {
    return (a % b).toString()
  }

  static unoMinus = (a) => {
    return (-a).toString()
  }
}

export default Operations
