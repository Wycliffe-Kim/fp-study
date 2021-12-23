import axios from 'axios';

function getJSONCallback(url: string, success: (data: any) => void, fail: (error: Error) => void) {
  axios.get(url)
  .then((res) => success(res.data))
  .catch((err) => fail(err));
}

function getJSONPromise(url: string) {
  return new Promise<any>((resolve, reject) => 
    axios.get(url)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err)));
}

export {
  getJSONCallback,
  getJSONPromise
};