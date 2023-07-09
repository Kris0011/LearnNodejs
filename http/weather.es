import http from 'http';
exports.current = function(location, resultCallback) {
    http.request(location, function(response) {
        response.on('end', function() {
            resultCallback();
        });
    }).end();
};
