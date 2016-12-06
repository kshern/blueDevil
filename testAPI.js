var fetch = require('isomorphic-fetch')

var a = 0;

while (a < 100) {
    console.log(a);
     fetch('http://192.168.106.204:3001/')
    .then(function (res) { return res.json() })
    .then(function (data) { console.log(data) });
     a++
}
