for (let index = 0; index < 10; index++) {
  if (index == 4) {
    continue;
  }
  console.log(index);
}

console.warn("");

for (let index = 0; index < 10; index++) {
  if (index == 4) {
    break;
  }
  console.log(index);
}
