// Splice affects the initail array

let array = [10, 20, 30, 40, 50, 60, 70];

const arr1 = array.splice();
console.log(arr1); // -> arr1 = []
console.log(array); // -> array = [10,20,30,40,50,60,70]

// ------- Re-filling array ------------
array = [10, 20, 30, 40, 50, 60, 70];
const arr2 = array.splice(0);
console.log(arr2); // -> arr2 = [10,20,30,40,50,60,70]
console.log(array); // -> array = []

// ------- Re-filling array ------------
array = [10, 20, 30, 40, 50, 60, 70];
const arr3 = array.splice(2);
console.log(arr3); // -> arr3 = [30,40,50,60,70]
console.log(array); // -> array = [10,20]

// ------- Re-filling array ------------
array = [10, 20, 30, 40, 50, 60, 70];
const arr4 = array.splice(2, 3); // -> means start from index 2 and get 3 elements
console.log(arr4); // -> arr4 = [30,40,50]
console.log(array); // -> array = [10,20,60,70]

// ------- Re-filling array ------------
array = [10, 20, 30, 40, 50, 60, 70];
const arr5 = array.splice(2, 3, 100, 200, 300); // -> means start from index 2 and get 3 elements and put values 100, 200 and 300 at index 2
console.log(arr5); // -> arr5 = [30,40,50]
console.log(array); // -> array = [10,20,100,200,300,60,70]
