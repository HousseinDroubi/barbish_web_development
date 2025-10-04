const greet = (name) => {
  return `Hello ${name}`;
};
// processUserInput is a higher order function
const processUserInput = (callback, name) => {
  return callback(name);
};
console.log(processUserInput(greet, "John")); // Hello John
