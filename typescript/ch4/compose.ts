import _ from 'lodash';
import fp from 'lodash/fp';
import { normalize } from './normalize';
import { trim } from './trim';

const compose = [
  () => {
    const str = 'We can only see a short distance ' +
                'ahead but we can see plenty there ' +
                'that needs to be done';
  
    const explode = (str: string) => str.split(/\s+/);
    const count = (arr: string[]) => arr.length;
    const countWords = fp.compose(count, explode);
    console.log(countWords(str));
  },
  
  () => {
    const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
    const grades = [80, 100, 90, 99];
    const smartestStudent = fp.compose(
      (data: any) => data[0],
      fp.head,
      fp.reverse,
      fp.sortBy(fp.prop(1)),
      fp.zip
    );
    console.log(smartestStudent(students, grades));
  },
  
  () => {
    const validLength = (len: number, str: string) => str.length == len;
    const checkLengthSsn = _.partial(validLength, 9);
  
    const cleanInput = fp.compose(normalize, trim);
    const isValidSsn = fp.compose(checkLengthSsn, cleanInput);
  
    console.log(cleanInput('444-44-4444'));
    console.log(isValidSsn('444-44-4444'));
  }
];

export default compose;