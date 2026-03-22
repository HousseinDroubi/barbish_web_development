const getPromiseOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 1");
    }, 2000);
  });
};

const getPromiseTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 2");
    }, 3000);
  });
};

const getPromiseThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 3");
    }, 4000);
  });
};

const getPromisesAllSettled = () => {
  Promise.allSettled([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
    .then(([result_one, result_two, result_three]) => {
      console.log(result_one);
      console.log(result_two);
      console.log(result_three);
    })
    .catch((reason) => {
      console.error(reason);
    })
    .finally(() => {
      console.warn("Promise ended");
    });
};
getPromisesAllSettled();
