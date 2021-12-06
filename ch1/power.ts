function power_oop() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }

  console.log('oopPower:', array);
}

const power_fp = () => console.log('fpPower', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => Math.pow(num, 2)));

export {
  power_oop,
  power_fp,
}