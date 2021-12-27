import http from 'http';
import { students } from './students';

const server = http.createServer((req, res) => {
  if (req.url === '/students') {
    console.log('/students');
    res.end(JSON.stringify(students));
  }
});

server.listen(5555);