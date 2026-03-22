const getResult = (condition) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve("Data caught successfully");
      } else {
        reject("Got some errors");
      }
    }, 500);
  });

  return promise;
};

console.log("Log before requesting promise");

const promise = getResult(true);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Hi from finally block");
  });

console.log("Log after requesting promise");

// Pending
// Rejected
// fulfilled
