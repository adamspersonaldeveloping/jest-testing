const APICalls = require("./APICalls");
// const functions = require("./functions");

test("fetchUser function exists", () => {
  expect(APICalls.fetchUser).toBeDefined();
});

test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await APICalls.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

test("check that todos length is more than 1", async () => {
  expect.assertions(1);
  const len = await APICalls.fetchTodosLength();
  expect(len).toBeGreaterThan(1);
});
