import axios from 'axios';

function getJSON(url: string, success: (data: any) => void, fail: (error: Error) => void) {
  axios.get(url)
  .then((res) => {
    success(res.data);
  })
  .catch((err) => {
    fail(err);
  });
}

export default getJSON;