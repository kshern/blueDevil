var express = require('express');

var app = express();
var path = require('path')
var fetch = require('isomorphic-fetch')

var event = require('events').EventEmitter

var proxy = new event()
var status = 'ready'
app.get('/', function (req, res) {
  proxy.once('getData', function (data) {
    res.send(data);
  })
  if (status == 'ready') {
    status = 'pending'
    fetch('http://localhost:3001/users').then((response) => {
      return response.json()
    })
      .then((data) => {
        proxy.emit('getData', data)
        status = 'ready'
      })
  }
});

function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

app.get('/users', function (req, res) {
  count++
  var d = {
    title: "EJS example",
    answer: fib(41)

  }
  res.send(d)
})

if (!module.parent) {
  app.listen(3001);
  console.log('Express started on port 3001');
}
