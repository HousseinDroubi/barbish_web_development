// multiplier is a higher order function
const multiplier = (x) => {
  return (y) => {
    return x * y;
  };
};
const fun = multiplier(15);
console.log(fun(2)); // 30
