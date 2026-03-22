console.warn("&&"); // All conditions must be true
console.log(true && true); // true
console.log(true && false); // false
console.log(10 + 5 > 10 && true); // true
console.log(10 + 5 > 10 && false); // false

console.warn("||"); // if one is true, no matter what they rest are.
console.log(20 - 5 == 15 || 10 > 3);
console.log(typeof 20 == "number" || false); // true
console.log(typeof false == "boolean" || 16 % 7 > 1); // true

console.warn("!"); // Invert.

console.log(!(typeof false == "boolean" || 16 % 7 > 1)); // false
console.log(!(!(typeof false == "boolean") || !(16 % 7 > 1))); // false
