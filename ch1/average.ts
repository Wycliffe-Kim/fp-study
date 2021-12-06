const input = [80, 90, 100];

function average_oop() {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  const average = sum / input.length;
  console.log('average_oop', average);
}

function average_fp() {
  const sum = (total: number, current: number) => total + current;
  const total = (arr: number[]) => arr.reduce(sum);
  const size = (arr: number[]) => arr.length;
  const divide = (a: number, b: number) => a / b;
  const average = (arr: number[]) => divide(total(arr), size(arr));
  console.log('average_fp', average(input));
}

export {
  average_oop,
  average_fp
}