const checkAge = (age) => {
  if (age < 18) {
    throw new Error("Age must be greater than 18");
  } else {
    console.log("Access granted.");
  }
};
checkAge(17);
