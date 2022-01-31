import { calc } from "./calc.js"

let memory = ""
let inputArr = []

export const preparePoland = (event, input) => {
  if (event.target.dataset.value) {
    if (event.target.dataset.value === "ms" && inputArr.length === 1) {
      memory = inputArr[0]
      return
    }
    if (event.target.dataset.value === "mr") {
      if (input.value === "0") input.value = ""
      if (
        isNaN(inputArr[inputArr.length - 1]) &&
        inputArr[inputArr.length - 1] !== ")"
      ) {
        inputArr.push(memory)
        input.value += memory
      }
      return
    }
    if (event.target.dataset.value === "mc") {
      memory = ""
      return
    }
    if (event.target.dataset.value === "m+" && inputArr.length === 1) {
      memory = parseFloat(
        (parseFloat(inputArr[0]) + parseFloat(memory)).toPrecision(12)
      ).toString()
      return
    }
    if (event.target.dataset.value === "C") {
      inputArr.pop()
      input.value = inputArr.join("")
      return
    }
    if (event.target.dataset.value === "m-" && inputArr.length === 1) {
      memory = parseFloat(
        (parseFloat(memory) - parseFloat(inputArr[0])).toPrecision(12)
      ).toString()
      return
    }
    if (event.target.dataset.value === "=") {
      if (inputArr.length < 2) return
      if ("+ - / ^ \u00D7".includes(inputArr[inputArr.length - 1])) {
        inputArr.pop()
      }
      let result = calc(inputArr)
      input.value = result
      inputArr = []
      inputArr.push(result)
      return
    }
    if (event.target.dataset.value === "AC") {
      inputArr = []
      input.value = "0"
      return
    }
    if (input.value === "0" && !isNaN(event.target.dataset.value)) {
      input.value = ""
    }
    if (!isNaN(event.target.dataset.value)) {
      if (inputArr[inputArr.length - 1] === ")") return
      input.value += event.target.dataset.value
      if (inputArr.length === 0) {
        inputArr.push(event.target.dataset.value)
      } else if (
        isNaN(inputArr[inputArr.length - 1]) &&
        inputArr[inputArr.length - 1] !== ")"
      ) {
        inputArr.push(event.target.dataset.value)
      } else {
        inputArr[inputArr.length - 1] += event.target.dataset.value
      }
      return
    }
    if (event.target.dataset.value === ".") {
      if (
        !isNaN(inputArr[inputArr.length - 1]) &&
        !inputArr[inputArr.length - 1].includes(".")
      ) {
        input.value += event.target.dataset.value
        inputArr[inputArr.length - 1] += event.target.dataset.value
      }
      return
    }
    if (isNaN(event.target.dataset.value)) {
      if (event.target.dataset.value === "-") {
        if (input.value === "0") input.value = ""
        if (inputArr[inputArr.length - 1] === "-") return
        input.value += event.target.dataset.value
        inputArr.push(event.target.dataset.value)
      }
      if (event.target.dataset.value === "(") {
        if (input.value === "0") input.value = ""
        if (
          !isNaN(inputArr[inputArr.length - 1]) ||
          inputArr[inputArr.length - 1] === ")"
        )
          return
        input.value += event.target.dataset.value
        inputArr.push(event.target.dataset.value)
        return
      }
      if (event.target.dataset.value.includes(",")) {
        let arrValue = event.target.dataset.value.split(",")
        if (!isNaN(arrValue[0]) || arrValue[0] === "e") {
          if (!isNaN(inputArr[inputArr.length - 1])) return
          if (input.value === "0") input.value = ""
        } else if (arrValue[0] === "ln" || arrValue[0] === "log10") {
          if (input.value === "0") input.value = ""
          if (
            !isNaN(inputArr[inputArr.length - 1]) ||
            inputArr[inputArr.length - 1] === "(" ||
            inputArr[inputArr.length - 1] === ")"
          )
            return
        } else {
          if (
            isNaN(inputArr[inputArr.length - 1]) ||
            inputArr[inputArr.length - 1] === ")"
          )
            return
          if (input.value === "0") return
        }
        input.value += arrValue.join("")
        inputArr = inputArr.concat(arrValue)
        return
      }
      if (
        event.target.dataset.value === "\u221A" ||
        event.target.dataset.value === "\u221B"
      ) {
        if (input.value === "0") input.value = ""
        input.value += event.target.dataset.value
        inputArr.push(event.target.dataset.value)
      }
      if (inputArr.length === 0) return
      if (
        !isNaN(inputArr[inputArr.length - 1]) ||
        inputArr[inputArr.length - 1] === ")"
      ) {
        input.value += event.target.dataset.value
        inputArr.push(event.target.dataset.value)
      }
    }
  }
}

export const poland = (arr) => {
  let stack = []
  let outStr = []

  arr.forEach((item) => {
    if (!isNaN(item) || item === "e") {
      outStr.push(item)
    } else {
      if (stack.length === 0) {
        stack.push(item)
      } else if (item === "+" || item === "-") {
        for (let i = stack.length - 1; i >= 0; i--) {
          if (!"+ - \u00D7 / % ^ ln \u221A \u221B".includes(stack[i])) break
          outStr.push(stack.pop())
        }
        stack.push(item)
      } else if ("\u00D7 / % ln \u221A \u221B".includes(item)) {
        for (let i = stack.length - 1; i >= 0; i--) {
          if (!"\u00D7 / % ^ ln \u221A \u221B".includes(stack[i])) break
          outStr.push(stack.pop())
        }
        stack.push(item)
      } else if (item === ")") {
        for (let i = stack.length - 1; i >= 0; i--) {
          if (stack[i] === "(") {
            stack.pop()
            break
          }
          outStr.push(stack.pop())
        }
      } else {
        stack.push(item)
      }
    }
  })
  if (stack.includes("(" || ")")) return "Error"
  return outStr.concat(stack.reverse())
}
