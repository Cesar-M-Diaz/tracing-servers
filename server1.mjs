// SERVER1
'use strict';

import http from 'http'

const port = 9999;

// nsolid.start({
//   app: 'SERVER1',
// });

function generateRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const server = http.createServer((req, res) => {
  http.get(`http://localhost:9998/`, () => {
    setTimeout(() => {
      res.write('Hello World!');
      res.end();
    }, generateRandomInt(1, 100));
    http.get(`http://localhost:9997/`, () => {
      setTimeout(() => {
        res.write('Hello World!');
        res.end();
      }, generateRandomInt(1, 100));
    });
  });

});

server.listen(port, () => {
});
