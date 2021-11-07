import { calc } from "../scripts/calc";


test('2 + 3 to equal 23+', () => {
  expect(calc(["2", "+", "3"])).toBe("5");
})

test('(2+3)\u00D75-(4+2) to equal 19', () => {
  expect(calc(["(", "2", "+", "3", ")", "\u00D7", "5", "-", "(", "4", "+", "2", ")"])).toBe("19");
})

test('(2+9)^4 to equal 14641', () => {
  expect(calc(["(", "2", "+", "9", ")", "^", "4"])).toBe("14641");
})

test('\u221A(3^3+9) to equal 6', () => {
  expect(calc(["\u221A","(", "3", "^", "3", "+", "9", ")"])).toBe("6");
})

test('ln(e^2)+ln(e^10) to equal 23+', () => {
  expect(calc(["ln", "(", "e", "^", "2", ")", "+", "ln", "(", "e", "^", "10", ")"])).toBe("12");
})

test('19 % 4 to equal 3', () => {
  expect(calc(["19", "%", "4"])).toBe("3");
})