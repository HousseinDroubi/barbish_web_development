let sayHi = () => {
  console.log("Hi");
};

sayHi();

sayHi = () => console.log("Hi");

sayHi();

console.warn("");

sayHi = (name) => {
  return `Hi ${name}`;
};

console.log(sayHi("John"));

sayHi = (name) => `Hi ${name}`;

console.log(sayHi("John"));
