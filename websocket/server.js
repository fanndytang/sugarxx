var http = require('http');//引入http模块
var util = require('util')
var url = require('url')
var fs = require('fs')
var querystring  = require('querystring')


function start(route) {
    function onRequest(req, res) {
        var test = url.parse(req.url, true)
        res.writeHead(200, {"Content-Type": "text/plain"});
        console.log(test.pathname)
        res.write("test:" + route(test.pathname))
        res.write("\n")
        res.write("Hello World")
        res.end()
    }


    http.createServer(onRequest).listen(8888)
    console.log('服务器开启')
    console.log(__filename)
    console.log(__dirname)
}

exports.start = start