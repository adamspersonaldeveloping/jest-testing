//chunck array

const chunkArray = (arr, len) => {
  const chunkedArr = [];
  arr.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
};

module.exports = chunkArray;

// console.log(chunkArray([1, 2, 3, 4, 5, 6], 5), [1, 2, 3, 4, 5], [6]);
