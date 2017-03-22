const path = require('path');
var express = require('express');
var http = require('http');
var app = express ();
var port = 3000;
var fs = require('fs');

var handler = function handler(req, res) {

    var filePath = req.url;

      if (filePath == '/') {
          filePath = './public/index.html';
      } else {
          filePath = './public/' + req.url;
      }
console.log(filePath)
        var extname = path.extname(filePath);
        var contentTypesByExtention = {
        'html': 'text/html',
        'js':   'text/javascript',
        'css':  'text/css'
        };
    
        var contentType = contentTypesByExtention[extname] || 'text/html';

        fs.exists(filePath, function(exists) {

        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    res.writeHead(500);
                    res.end();
                }
                else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                }
            });
        }
        else {
            res.writeHead(404);
            res.end();
        }
      });
    }


var server = http.createServer(handler);
//app.use(express.static(__dirname + '/public'));

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port);

server.listen(3000);