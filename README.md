# Permissive CORS

Allow [CORS](http://www.w3.org/TR/cors/) for Express apps in the most permissive
way. In other words, this middleware **ALLOWS ALL THE THINGS**.

## Installation

`npm install permissive-cors`

## Example

Just add it to the middleware stack. Any specific headers or HTTP verbs
requested by client calls via **Access-Control-Request-Method** or
**Access-Control-Request-Headers** will be automatically added to the
corresponding response headers.

```javascript
var express = require('express');
var app = express();

var cors = require('permissive-cors');
app.use(cors());

app.get('/', function (req, res) {
  //...
});

app.post('/', function (req, res) {
  //...
});

app.delete('/', function (req, res) {
  //...
});

app.listen(8080);
```
