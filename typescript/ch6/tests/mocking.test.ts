import axios from 'axios';
import TestDB from '../TestDB';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: {
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