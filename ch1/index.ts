import { average_fp, average_oop } from './average';
import { power_oop, power_fp } from './power';
import { showStudent_fp, showStudent_oop } from './showStudent';

const codes = [
  power_oop,
  power_fp,
  showStudent_oop,
  showStudent_fp,
  average_oop,
  average_fp
];

const main = () => codes.forEach(code => code());
main();