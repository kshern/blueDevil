var fetch = require('isomorphic-fetch')

var a = 0;

while (a < 100) {
    console.log(a);
     fetch('http://localhost:3001')
    .then(function (res) { return res.json() })
    .then(function (data) { console.log(data) });
     a++
}
