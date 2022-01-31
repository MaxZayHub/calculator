import { preparePoland } from "./poland"

export const switchButtonClick = (switchButton) => {
  document.body.classList.toggle("light")
  switchButton.innerText = document.body.classList.contains("light")
    ? "Сменить на темную"
    : "Сменить на светлую"
}

export const buttonBlockClick = (event, input) => {
  preparePoland(event, input)
}
