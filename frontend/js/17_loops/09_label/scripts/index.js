loop_1: for (let i = 0; i < 5; i++) {
  loop_2: for (let j = 0; j < 5; j++) {
    if (i == 2 && j == 2) {
      break loop_1;
    }
    console.log(`i = ${i} - j = ${j}`);
  }
}
