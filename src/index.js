import "./styles/style.css"
import { calc } from "./scripts/calc.js"

let input = document.querySelector(".input")

let switchButton = document.querySelector(".switch")

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
    value: "C",
    text: "C",
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
    value: ["log10", "("],
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
    value: "%",
    text: "%",
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

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("light")
  switchButton.innerText = document.body.classList.contains("light")
    ? "Сменить на темную"
    : "Сменить на светлую"
})

arrButtons.forEach((item) => {
  let button = document.createElement("button")
  if (item.type === "advancedArifmetic") {
    button.className = "button advancedArifmetic"
  } else if (item.type === "basicArifmetic") {
    button.className = "button basicArifmetic"
  } else if (item.type === "number") {
    button.className = "button number"
  } else if (item.type === "zero") {
    button.className = "button number zero"
  } else if (item.type === "rightCorner") {
    button.className = "button basicArifmetic border-right"
  } else if (item.type === "leftCorner") {
    button.className = "button advancedArifmetic border-left"
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
})
