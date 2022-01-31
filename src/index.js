import "./styles/style.css"
import arrButtons from "./controlers/buttons"
import drawButtons from "./scripts/draw"
import { switchButtonClick, buttonBlockClick } from "./scripts/events"

const input = document.querySelector(".input")

const switchButton = document.querySelector(".switch")

const buttonBlock = document.querySelector(".buttons-block")

drawButtons(arrButtons, buttonBlock)

switchButton.addEventListener("click", () => {
  switchButtonClick(switchButton)
})

buttonBlock.addEventListener("click", (event) => {
  buttonBlockClick(event, input)
})
