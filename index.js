module.exports = function () {

  return function(req, res, next) {
    // Allows requests from anywhere
    res.set('Access-Control-Allow-Origin', '*');
    // Allows any HTTP Verb
    res.set('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    // Allows any HTTP Request Header
    res.set('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    // Respond righ away on pre-flight requests
    if ('OPTIONS' == req.method) return res.send(200);

    next();
  }
}
