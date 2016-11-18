'use strict';

require("babel-register")({
  "presets": ["es2015-node5"],
  "plugins": [
    "transform-async-to-generator",
    "syntax-async-functions"
  ]
});

const app = require('../src/app');

console.log('listen 3001')
app.listen(3001)


