var test        = require('tape');
var osStats     = require('./index');
var os          = require('os');
test('Should return json', function (t) {
    var result = undefined;
    var res = {
            setHeader: function () {}
        ,   write: function (value) {
                result = value;
            }
        ,   end: function() {}
    }

    osStats()({}, res);

    t.assert(typeof result === 'string');

    var stats = JSON.parse(result);

    for (key in stats) {
        if (os[key] === undefined) {
            t.fail();
        } else {
            t.ok(true);
        }
    }

    t.end();
})