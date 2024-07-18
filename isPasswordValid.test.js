const isPasswordValid = require("./isPasswordValid");

describe("password should pass all tests", () => {
  it("should check for at least 8 characters", () => {
    expect(isPasswordValid("abcdeF7")).not.toBeTruthy();
  });
  it("should check for less than 32 characters", () => {
    expect(
      isPasswordValid(
        "1234567891011121314151617181920212223242526272829303132aA"
      )
    ).not.toBeTruthy();
  });
  it("should check that there is at least one number", () => {
    expect(isPasswordValid("aaaaaaaA")).not.toBeTruthy();
  });
  it("should check for at least one uppercase letter", () => {
    expect(isPasswordValid("1234567a")).not.toBeTruthy();
  });
  it("should check that there is at least one lowercase letter", () => {
    expect(isPasswordValid("1234567A")).not.toBeTruthy();
  });
  it("should accept non alphanumeric characters", () => {
    expect(isPasswordValid("aA1/<>?:\";'\\|]}[{=+-_)(*&^%$#@`~")).toBeTruthy();
  });
  it("should accept a valid password", () => {
    expect(isPasswordValid("Cash1234")).toBeTruthy();
  });
});
