import axios from 'axios';
import getJSON from './getJSON';

function callbackHell() {
  getJSON('http://localhost:5555/students', (data) => {
    console.log('callbackHell', 'success');
    console.log(data);
  }, (err) => {
    console.log('callbackHell', 'fail');
    console.log(err);
  });
}

export {
  callbackHell
};