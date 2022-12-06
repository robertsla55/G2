var http = require('http');
var n = require('./primeiromodulo')
var dia = require('./moduloData')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>aula 1<br></h1>');
    res.write(n.nome()+'<br>')
    //res.write(Date());
    res.write(dia.diaDaSemana()+',<br>')
    res.end('bom dia');
}) .listen(80);