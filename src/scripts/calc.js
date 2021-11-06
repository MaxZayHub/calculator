import { makeOreration } from "./operations"

export const calc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "e") {
      arr[i] = Math.E
    }
    if (isNaN(arr[i]) && arr[i] !== "e") {
      if (
        arr[i] === "\u221A" ||
        arr[i] === "\u221B" ||
        arr[i] === "ln" ||
        arr[i] === "log10"
      ) {
        let res = makeOreration([parseFloat(arr[i - 1])], arr[i])
        arr.splice(i - 1, 2)
        arr.splice(i - 1, 0, res)
        i -= 1
      } else {
        let res = makeOreration(
          [parseFloat(arr[i - 2]), parseFloat(arr[i - 1])],
          arr[i]
        )
        if (res === "Error") return "Error"
        arr.splice(i - 2, 3)
        arr.splice(i - 2, 0, res)
        i -= 2
      }
    }
  }
  return arr[0]
}
