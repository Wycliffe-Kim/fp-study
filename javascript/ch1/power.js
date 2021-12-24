const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const power = [
  () => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(Math.pow(array[i], 2));
    }
  
    console.log('power_ip', result);
  },
  
  () => console.log('power_fp', array.map((num) => Math.pow(num, 2)))
];

module.exports = power;