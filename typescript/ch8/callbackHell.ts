import axios from 'axios';

function getJSON(url: string, success: (data: any) => void, fail: (error: Error) => void) {
  console.log('getJSON');
  axios.get(url)
  .then((res) => {
    success(res.data);
  })
  .catch((err) => {
    fail(err);
  });
}

function callbackHell() {
  getJSON('http://localhost:5555/students', (data) => {
    console.log('success');
    console.log(data);
  }, (err) => {
    console.log('fail');
    console.log(err);
  });
}

export {
  callbackHell
};