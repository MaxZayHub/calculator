import "./styles/style.css"

let input = document.querySelector(".input")

const buttonBlock = document.querySelector(".buttons-block")

let memory = ""

let inputArr = []

let arrButtons = [
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: ")",
    text: ")",
  },
  {
    type: "advancedArifmetic",
    value: "mc",
    text: "mc",
  },
  {
    type: "advancedArifmetic",
    value: "m+",
    text: "m+",
  },
  {
    type: "advancedArifmetic",
    value: "m-",
    text: "m-",
  },
  {
    type: "advancedArifmetic",
    value: "mr",
    text: "mr",
  },
  {
    type: "advancedArifmetic",
    value: "ms",
    text: "ms",
  },
  {
    type: "advancedArifmetic",
    value: "AC",
    text: "AC",
  },
  {
    type: "advancedArifmetic",
    value: "%",
    text: "%",
  },
  {
    type: "basicArifmetic",
    value: "/",
    text: "\u00F7",
  },
  {
    type: "advancedArifmetic",
    value: "2^nd",
    text: `2\u207Fᵈ`,
  },
  {
    type: "advancedArifmetic",
    value: ["^", "2"],
    text: `x\u00B2`,
  },
  {
    type: "advancedArifmetic",
    value: ["^", "3"],
    text: `x\u00B3`,
  },
  {
    type: "advancedArifmetic",
    value: "^",
    text: `xʸ`,
  },
  {
    type: "advancedArifmetic",
    value: ["e", "^"],
    text: `eˣ`,
  },
  {
    type: "advancedArifmetic",
    value: ["10", "^"],
    text: `10ˣ`,
  },
  {
    type: "number",
    value: "7",
    text: "7",
  },
  {
    type: "number",
    value: "8",
    text: "8",
  },
  {
    type: "number",
    value: "9",
    text: "9",
  },
  {
    type: "basicArifmetic",
    value: "\u00D7",
    text: "\u00D7",
  },
  {
    type: "advancedArifmetic",
    value: ["1", "/"],
    text: `1/x`,
  },
  {
    type: "advancedArifmetic",
    value: "\u221A",
    text: "\u221Ax",
  },
  {
    type: "advancedArifmetic",
    value: "\u221B",
    text: `\u221Bx`,
  },
  {
    type: "advancedArifmetic",
    value: ["^", "(", "1", "/"],
    text: `ʸ\u221Ax`,
  },
  {
    type: "advancedArifmetic",
    value: ["ln", "("],
    text: `ln`,
  },
  {
    type: "advancedArifmetic",
    value: "log10",
    text: `log\u2081\u2080`,
  },
  {
    type: "number",
    value: "4",
    text: "4",
  },
  {
    type: "number",
    value: "5",
    text: "5",
  },
  {
    type: "number",
    value: "6",
    text: "6",
  },
  {
    type: "basicArifmetic",
    value: "-",
    text: "\u2212",
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: "x!",
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: "sin",
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: "cos",
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `tan`,
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `e`,
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `EE`,
  },
  {
    type: "number",
    value: "1",
    text: "1",
  },
  {
    type: "number",
    value: "2",
    text: "2",
  },
  {
    type: "number",
    value: "3",
    text: "3",
  },
  {
    type: "basicArifmetic",
    value: "+",
    text: "\u002B",
  },
  {
    type: "leftCorner",
    value: "",
    text: `Rad`,
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `sinh`,
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: "cosh",
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `tanh`,
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `\u03C0`,
  },
  {
    type: "advancedArifmetic",
    value: "",
    text: `Rand`,
  },
  {
    type: "zero",
    value: "0",
    text: "0",
  },
  {
    type: "number",
    value: ".",
    text: ",",
  },
  {
    type: "rightCorner",
    value: "=",
    text: "=",
  },
]

arrButtons.forEach((item) => {
  let button = document.createElement("button")
  if (item.type === "advancedArifmetic") {
    button.className = "button gray"
  } else if (item.type === "basicArifmetic") {
    button.className = "button orange"
  } else if (item.type === "number") {
    button.className = "button light-gray"
  } else if (item.type === "zero") {
    button.className = "button light-gray zero"
  } else if (item.type === "rightCorner") {
    button.className = "button orange border-right"
  } else if (item.type === "leftCorner") {
    button.className = "button gray border-left"
  }
  button.dataset.value = item.value
  button.innerHTML = item.text
  buttonBlock.appendChild(button)
})

buttonBlock.addEventListener("click", (event) => {
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
    if (event.target.dataset.value === "m-" && inputArr.length === 1) {
      memory = parseFloat(
        (parseFloat(memory) - parseFloat(inputArr[0])).toPrecision(12)
      ).toString()
      return
    }
    if (event.target.dataset.value === "=") {
      if ("+ - / ^ \u00D7".includes(inputArr[inputArr.length - 1])) {
        inputArr.pop()
      }
      let result = poland(inputArr)
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
          if (input.value === "0") input.value = ""
          input.value += arrValue.join("")
          inputArr = inputArr.concat(arrValue)
          return
        } else {
          if (
            isNaN(inputArr[inputArr.length - 1]) ||
            inputArr[inputArr.length - 1] === ")"
          )
            return
          if (input.value === "0") return
          input.value += arrValue.join("")
          inputArr = inputArr.concat(arrValue)
          return
        }
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
      return
    }
  }
})

const makeOreration = (arr, operation) => {
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
  }
}

const calc = (arr) => {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "e") {
      arr[i] = Math.E
    }
    if (isNaN(arr[i]) && arr[i] !== "e") {
      if (arr[i] === "\u221A" || arr[i] === "\u221B") {
        let res = makeOreration([parseFloat(arr[i + 1])], arr[i])
        arr.splice(i, 2)
        arr.splice(i, 0, res)
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

const poland = (arr) => {
  let stack = []
  let outStr = []

  arr.forEach((item) => {
    if (
      !isNaN(item) ||
      item === "e" ||
      item === "\u221A" ||
      item === "\u221B"
    ) {
      outStr.push(item)
    } else {
      if (item === "+" || item === "-") {
        if (
          stack[stack.length - 1] === "+" ||
          stack[stack.length - 1] === "-"
        ) {
          outStr.push(stack.pop())
        } else {
          for (let i = stack.length - 1; i >= 0; i--) {
            if (stack[i] === "\u00D7" || stack[i] === "/" || stack[i] === "^") {
              outStr.push(stack.pop())
            } else {
              break
            }
          }
          stack.push(item)
        }
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
  return calc(outStr.concat(stack.reverse()))
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
  console.log(a)
  return a >= 0 ? Math.sqrt(a) : "Error"
}

const sqrt3 = (a) => {
  return a ** (1 / 3)
}
