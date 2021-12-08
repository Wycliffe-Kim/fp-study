import { averageGrade_fp, averageGrade_ip, average_fp, average_ip } from './average';
import { power_ip, power_fp } from './power';
import { showStudent_fp, showStudent_ip } from './showStudent';
import main from '../main';

main([
  power_ip,
  power_fp,
  showStudent_ip,
  showStudent_fp,
  average_ip,
  average_fp,
  averageGrade_ip,
  averageGrade_fp
]);