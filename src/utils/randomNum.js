function arrOfRandomNum(num, length) {
  //This function returns a selection of distinct random pieces of data, from an array of data.
  //num is the number of random pieces of data you need
  //length is the length of the array of data from which you want to select some random data

  let rangeArr = [];
  for (let i = 0; i < length; i++) {
    rangeArr.push(i);
  }

  for (let i = 0; i < (length - num); i++) { //NOT best method, as doing a lot of iterations....need to improve.
    let randomNum = Math.floor(Math.random() * rangeArr.length);
    rangeArr.splice(randomNum - 1, 1);
  }

  return rangeArr;
} //need to write a test to check if this is working as expected.

export default arrOfRandomNum;


// function randomNumbers(length) {
//   return Array.from({ length }, () => {
//     const randomNum = Math.floor(Math.random() * pokemonData.length)
//     return randomNum;
//   })
// } 