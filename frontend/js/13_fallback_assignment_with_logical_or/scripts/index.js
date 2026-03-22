// Fallback Assignment With Logical Or works with:

// 1- undefined
// 2- null
// 3- falsy value: 0, "" or false

const price = undefined;

console.log(`price is ${price || -1}`);
