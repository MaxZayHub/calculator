import { calc } from "./calc.js"

export const poland = (arr) => {
  let stack = []
  let outStr = []

  arr.forEach((item) => {
    if (!isNaN(item) || item === "e") {
      outStr.push(item)
    } else {
      if (item === "+" || item === "-") {
        if (
          stack[stack.length - 1] === "+" ||
          stack[stack.length - 1] === "-"
        ) {
          outStr.push(stack.pop())
          stack.push(item)
        } else {
          for (let i = stack.length - 1; i >= 0; i--) {
            if (
              stack[i] === "\u00D7" ||
              stack[i] === "/" ||
              stack[i] === "^" ||
              stack[i] === "\u221A" ||
              stack[i] === "\u221B" ||
              stack[i] === "ln" ||
              stack[i] === "%"
            ) {
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
