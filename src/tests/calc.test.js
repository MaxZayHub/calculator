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

test('10^4 to equal 100000', () => {
  expect(calc(["10", "^", "4"])).toBe("10000");
})

test('10/2 to equal 5', () => {
  expect(calc(["10", "/", "2"])).toBe("5");
})

test('10\u00D73 to equal 30', () => {
  expect(calc(["10", "\u00D7", "3"])).toBe("30");
})

test('\u221A25 to equal 5', () => {
  expect(calc(["\u221A", "25"])).toBe("5");
})

test('\u221B27 to equal 3', () => {
  expect(calc(["\u221B", "27"])).toBe((Math.cbrt(27)).toString());
})

test('ln(25)', () => {
  expect(calc(["ln", "(", "25", ")"])).toBe(Math.log(25).toString());
})

test('log10(225)', () => {
  expect(calc(["log10", "(", "225", ")"])).toBe((Math.log(225) / Math.log(10)).toString());
})
