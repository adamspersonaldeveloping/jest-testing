const fizzBuzz = require("./fizzBuzz");

test("test fizzBuzz for 3", () => {
  expect(fizzBuzz(3)).toEqual("Fizz");
});

test("test fizzBuzz for 5", () => {
  expect(fizzBuzz(5)).toEqual("Buzz");
});

test("test fizzBuzz for 15", () => {
  expect(fizzBuzz(15)).toEqual("fizzBuzz");
});

test("test fizzBuzz for 3", () => {
  expect(fizzBuzz(8)).toEqual("8");
});
