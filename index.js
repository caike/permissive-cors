module.exports = function () {

  return function(req, res, next) {
    // Allows requests from anywhere
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Allows any HTTP Verb
    res.setHeader('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    // Allows any HTTP Request Header
    res.setHeader('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    // Respond righ away on pre-flight requests
    if ('OPTIONS' == req.method) return res.end('', 200);

    next();
  }
}
