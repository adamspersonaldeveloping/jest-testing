const reverseString = require("./reverseString");

//does the function exists?
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

//does it reverse?
test("string is reversed", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("string is reversed with cases", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
