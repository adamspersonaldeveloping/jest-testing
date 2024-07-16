const functions = require("./functions");

//run something before each individual test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

//run something before running all the tests
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database closed...");

test("adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//comparing objects we need to use toEqual so that it can compare non-primative types
test("user should be John Adams object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Adams",
  });
});

//less than greater than

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//Arrays

test("Admin should be in username", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//working with async data

//Promise
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//Async Await

test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
