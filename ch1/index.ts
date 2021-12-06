import { power_oop, power_fp } from './power';
import { showStudent_fp, showStudent_oop } from './showStudent';

const codes = [
  power_oop,
  power_fp,
  showStudent_oop,
  showStudent_fp,
];

const main = () => codes.forEach(code => code());
main();