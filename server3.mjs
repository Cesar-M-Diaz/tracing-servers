// SERVER3
'use strict';

import http from 'http'

const port = 9997;

// nsolid.start({
//   app: 'SERVER3',
// });

function generateRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    http.get(`http://localhost:9998/end`, () => {
      setTimeout(() => {
        res.write('Hello World!');
        res.end();
      }, generateRandomInt(1, 100));
    });
  } else if (req.url == '/long') {
    setTimeout(() => {
      res.write('Hello World!');
      res.end();
    }, 2500);
  }
});

server.listen(port, () => {
});
