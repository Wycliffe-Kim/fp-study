const R = require('ramda');
const { IO } = require('../ch5/IO');
const average = require('./average');
const { getJSONCallback } = require('./getJSON');

function callbackHell() {
  const log = R.curry((title, message) => console.log(title, message));

  getJSONCallback('http://localhost:5555/students', (data) => {
    const grades = R.map((student) => student.grade)(data);
    const grade = average(grades);
    const io = (grade) => IO.of(grade).map(log('callbackHell success')).run();
    io(grade);
  }, (err) => {
    log('callbackHell fail', err);
  });
}

module.exports = callbackHell;