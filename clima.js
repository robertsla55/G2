var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
        var q =url.parse(req.url, true).query;
        var filname = "." + q.pathname;
        fs.appendFile(filname, function (err, data) {
            if (err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("Pagina Invalida!");
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }).listen(80);