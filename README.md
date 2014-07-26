# Permissive CORS

[![Build Status](https://secure.travis-ci.org/caike/permissive-cors.png)](http://travis-ci.org/caike/permissive-cors)

Allows [CORS](http://www.w3.org/TR/cors/) for Node HTTP in the most permissive
way.

Any specific headers or HTTP verbs
requested by client calls via **Access-Control-Request-Method** or
**Access-Control-Request-Headers** will be automatically added to the
corresponding response headers. In other words, this middleware **ALLOWS ALL THE THINGS**.

![](https://raw.githubusercontent.com/caike/permissive-cors/master/allthethings.png)

## Installation

`npm install permissive-cors`

## Example

Example using Express:

```javascript
var express = require('express');
var app = express();

var cors = require('permissive-cors');
app.use(cors());

app.put('/', function (req, res) {
  //...
});
app.delete('/', function (req, res) {
  //...
});
```

Example using Node HTTP:

```javascript
var http = request('http');
var cors = require('permissive-cors');
var corsMiddleware = cors();

http.createServer(function (req, res) {
  corsMiddleware(req, res, function onDone() {
    // your core here
    res.end();
  });
});

```

## Tests

Run `npm test`
