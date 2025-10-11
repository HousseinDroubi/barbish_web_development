console.log("Start");

function task1() {
  setTimeout(() => {
    console.log("Task 1 - Done");
  }, 1000);
}

function task2() {
  console.log("Task 2 - Done");
}

task1(); // This will complete first
task2(); // This waits for task1 to complete
console.log("End");
