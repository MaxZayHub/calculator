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
