// Slice doesn't affect the initail array

const array = [10, 20, 30, 40, 50, 60, 70];

const arr1 = array.slice(); // -> arr1 = [10,20,30,40,50,60,70]
const arr2 = array.slice(0); // -> arr2 = [10,20,30,40,50,60,70]
const arr3 = array.slice(2); // -> arr3 = [30,40,50,60,70]
const arr4 = array.slice(2, 5); // -> arr4 = [30,40,50] -> 5 is execluded

console.log(array);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
