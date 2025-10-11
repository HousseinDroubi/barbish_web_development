console.log("Start");

function task1() {
  console.log("Task 1 - Done");
}

function task2() {
  console.log("Task 2 - Done");
}

task1(); // This will complete first
task2(); // This waits for task1 to complete
console.log("End");
