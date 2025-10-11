const word = "John Doe ";

console.log(word[0]); // J
console.log(word[3]); // n
console.log(word.length); // 9
console.log(word.toLowerCase()); // john doe
console.log(word.toUpperCase()); // JOHN DOE
console.log(word.includes("oe")); // true
console.log(word.indexOf("o")); // 1
console.log(word.lastIndexOf("o")); // 6
console.log(word.substring(0, 6)); // John D -> 6th index is not included
console.log(word.replace("o", "#")); // J#hn Doe
console.log(word.replaceAll("o", "#")); // J#hn D#e
console.log(word.trim()); // John Doe
console.log(word.split("o")); // ["J","hn D","e "]
console.log(word.startsWith("Jo")); // true
console.log(word.endsWith("DD")); // false
console.log(word.concat(".How are you?")); // John Doe .How are you?
