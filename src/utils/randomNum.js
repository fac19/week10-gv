function arrOfRandomNum(num, length) {
  //This function returns a selection of distinct random pieces of data, from an array of data.
  //num is the number of random pieces of data you need
  //length is the length of the array of data from which you want to select some random data

  let rangeArr = [];
  for (let i = 0; i < length; i++) {
    rangeArr.push(i);
  }

  for (let i = 0; i < (length - num); i++) {
    console.log("i", i);
    let randomNum = Math.floor(Math.random() * length);
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
//NEED TO IMPROVE GENERATOR TO MAKE RANDOM NUMBERS UNIQUE
// 1) Generate array of posible numbers, e.g. 1 -> 20
// E.g. const arrOfNumbers = Array.from... -> generate
// 2) generate random number between 0-19, pop that out of the array and save it in new array
// 3) generate the next random number between 0-18, pop that out...
// 4) repeat in a loop 