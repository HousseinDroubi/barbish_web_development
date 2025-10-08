let obj = {
  name: "Houssein",
  age: 28,
  graduate: false,
};

const printData = ({ name, age, graduate }) => {
  console.log(name);
  console.log(age);
  console.log(graduate);
};

printData(obj);
