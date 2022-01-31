import Operations from "./operations"

export const makeOperation = (arr, operation) => {
  switch (operation) {
    case "+": {
      return Operations.plus(arr[0], arr[1])
    }
    case "-": {
      return Operations.minus(arr[0], arr[1])
    }
    case "/": {
      return Operations.divide(arr[0], arr[1])
    }
    case "\u00D7": {
      return Operations.multiplication(arr[0], arr[1])
    }
    case "^": {
      return Operations.exponentiation(arr[0], arr[1])
    }
    case "\u221A": {
      return Operations.sqrt(arr[0])
    }
    case "\u221B": {
      return Operations.sqrt3(arr[0])
    }
    case "ln": {
      return Operations.log(arr[0])
    }
    case "log10": {
      return Operations.logX10(arr[0])
    }
    case "%": {
      return Operations.percent(arr[0], arr[1])
    }
    case "--": {
      return Operations.unoMinus(arr[0])
    }
  }
}
