const axios = require('axios');
const { TestDB } = require('../TestDB');

jest.mock('axios');
axios.get.mockResolvedValue({ data: {
  a: 'testA',
  b: 'testB',
  c: 'testC' 
}});

test('mocking', () => {
  const db = new TestDB();
  db.get().then((response) => {
    expect(JSON.stringify(response)).toBe('{"a":"testA","b":"testB","c":"testC"}');
  });
});