const drawButtons = (arrButtons, buttonBlock) => {
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
}

export default drawButtons
