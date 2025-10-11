const getPromiseOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1");
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

const getPromisesRace = () => {
  Promise.race([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
    .then((result) => {
      console.log(result);
    })
    .catch((reason) => {
      console.error(reason);
    })
    .finally(() => {
      console.warn("Promise ended");
    });
};

getPromisesRace();
