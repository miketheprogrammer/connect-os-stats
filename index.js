var os = require('os');
module.exports = function () {
    return function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        var osData = {};

        for (var key in os) {
            if (typeof os[key] === 'function') {
                osData[key] = os[key]();
            } else {
                osData[key] = os[key];
            }
        }

        res.write(JSON.stringify(osData));

        res.end();
    }
}