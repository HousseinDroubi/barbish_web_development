const fun_1 = () => {
  const fun_2 = () => {
    const fun_3 = () => {
      console.log(`Hi from fun_3`);
    };
    console.log(`Hi from fun_2`);
    fun_3();
  };
  console.log(`Hi from fun_1`);
  fun_2();
};
fun_1();
