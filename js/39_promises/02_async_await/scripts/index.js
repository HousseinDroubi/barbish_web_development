const getResult = (condition) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve("Data caught successfully");
      } else {
        reject("Got some errors");
      }
    }, 500);
  });
};

const showPromise = async () => {
  console.log("Log before requesting promise");

  try {
    const result = await getResult(false);
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  console.log("Log after requesting promise");
};

showPromise();
