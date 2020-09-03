"use strict";
var url = require('url');
var querystring = require('querystring');
var myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(querystring.parse(myURL.query));
//# sourceMappingURL=url.js.map