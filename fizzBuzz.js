const fizzBuzz = (n) =>
  n % 3 === 0 && n % 5 === 0
    ? "fizzBuzz"
    : n % 5 === 0
    ? "Buzz"
    : n % 3 === 0
    ? "Fizz"
    : `${n}`;

module.exports = fizzBuzz;
