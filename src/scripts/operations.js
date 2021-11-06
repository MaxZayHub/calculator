export const makeOreration = (arr, operation) => {
  switch (operation) {
    case "+": {
      return plus(arr[0], arr[1])
    }
    case "-": {
      return minus(arr[0], arr[1])
    }
    case "/": {
      return divide(arr[0], arr[1])
    }
    case "\u00D7": {
      return multiplication(arr[0], arr[1])
    }
    case "^": {
      return exponentiation(arr[0], arr[1])
    }
    case "\u221A": {
      return sqrt(arr[0])
    }
    case "\u221B": {
      return sqrt3(arr[0])
    }
    case "ln": {
      return log(arr[0])
    }
    case "log10": {
      return logX10(arr[0])
    }
    case "%": {
      return percent(arr[0], arr[1])
    }
    case "--": {
      return unoMinus(arr[0])
    }
  }
}

const plus = (a, b) => {
  return parseFloat((a + b).toPrecision(12)).toString()
}

const minus = (a, b) => {
  return parseFloat((a - b).toPrecision(12)).toString()
}

const multiplication = (a, b) => {
  return parseFloat((a * b).toPrecision(12)).toString()
}

const divide = (a, b) => {
  return b === 0 ? "Error" : parseFloat((a / b).toPrecision(12)).toString()
}

const exponentiation = (a, b) => {
  return parseFloat((a ** b).toPrecision(12)).toString()
}

const sqrt = (a) => {
  return a >= 0 ? Math.sqrt(a).toString() : "Error"
}

const sqrt3 = (a) => {
  return (a ** (1 / 3)).toString()
}

const log = (a) => {
  return Math.log(a).toString()
}

const logX10 = (a) => {
  return (Math.log(a) / Math.log(10)).toString()
}

const percent = (a, b) => {
  return (a % b).toString()
}

const unoMinus = (a) => {
  return (-a).toString()
}
