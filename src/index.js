import "./styles/style.css"

let input = document.querySelector(".input")

let arr = [
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
    value: "AC",
    text: "AC",
  },
  {
    type: "advancedArifmetic",
    value: "+/-",
    text: "+/-",
  },
  {
    type: "advancedArifmetic",
    value: "%",
    text: "%",
  },
  {
    type: "advancedArifmetic",
    value: "/",
    text: "\u00F7",
  },
  {
    type: "advancedArifmetic",
    value: "2^nd",
    text: "2",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
  {
    type: "advancedArifmetic",
    value: "(",
    text: "(",
  },
]

let lightGrayButtons = document.querySelectorAll(".light-gray")
let grayButtons = document.querySelectorAll("gray")

// lightGrayButtons.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     console.log(event);
//     if (input.value === "0" && event.target.innerHTML !== ",") {
//       input.value = "";
//     }
//     input.value += event.target.innerHTML;
//   });
// });
