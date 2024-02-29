// SERVER2
'use strict';

import http from 'http'

const port = 9998;

// nsolid.start({
//   app: 'SERVER2',
// });

function generateRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    http.get(`http://localhost:9997/`, () => {
      setTimeout(() => {
        res.write('Hello World!');
        res.end();
      }, generateRandomInt(1, 100));
    });

    http.get(`http://localhost:9997/long`, () => {
    });
  } else if (req.url == '/end') {
    setTimeout(() => {
      res.write('Hello World!');
      res.end();
    }, generateRandomInt(1, 100));
  }
});

server.listen(port, () => {
});
