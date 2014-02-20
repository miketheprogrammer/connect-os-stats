connect-os-stats
================

Simply putting the status from node os into json and returning them to request.

[![build status](https://secure.travis-ci.org/miketheprogrammer/connect-os-stats.png)](http://travis-ci.org/miketheprogrammer/connect-os-stats)

```javascript

npm install connect-os-stats

```

Express example
```javascript
var app = require('express')();

var stats = require('./index');

app.get('/stats', stats());

app.listen(3010);

```

This module does not have to be used with connect or express. It supports method definition (req, res);
as long as res supports.

setHeader / write / end


