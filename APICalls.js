const { default: axios } = require("axios");

const APICalls = {
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),

  fetchTodosLength: async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //console.log(data.data.length);
    return res.data.length;
  },
};

console.log(APICalls.fetchTodosLength());
console.log(APICalls.fetchUser());

module.exports = APICalls;
