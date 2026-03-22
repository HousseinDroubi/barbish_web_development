const data = {
  name: "Houssein",
  age: 28,
  skills: ["HTML", "CSS", "JS", "React", "Flutter", "ExpressJS"],
  address: {
    country: "LB",
    region: "Beqaa",
    floor: 0,
  },
  sayHi: function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  },
};
console.log(data.name); // Houssein
console.log(data.skills[1]); // CSS
console.log(data.address.floor); // 0
data.sayHi();
