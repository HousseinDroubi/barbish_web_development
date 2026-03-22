function checkAge(age) {
  if (age < 18) {
    return;
  }
  console.log(`Access granted`);
}

checkAge(20);
console.warn("");
checkAge(10);
