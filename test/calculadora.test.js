const calculadora = require("../models/calculadora");

test("Test sum 1 + 3", () => {
  expect(calculadora.somar(1, 3)).toBe(4);
});

test("Test sum 5 + 100", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test("Test sum 'banana' + 100", () => {
  expect(calculadora.somar("banana", 100)).toBe("Erro");
});
