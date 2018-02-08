var http = require('http');//引入http模块
var util = require('util')
var url = require('url')
var fs = require('fs')
var querystring  = require('querystring')


function start(route) {
    function onRequest(req, res) {
        var test = url.parse(req.url, true)
        var head = {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With,content-type",
            "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
        }
        res.writeHead(200, head);
console.log(req.method)
     //   console.log(test.pathname)
       /* res.write("test:" + route(test.pathname))
        res.write("\n")
        res.write("Hello World")*/
        //res.json({"result":{message:"success"}});
     //   console.log(res)
        res.end(JSON.stringify({"test": route(test.pathname)}))
    }


    http.createServer(onRequest).listen(8888)
    console.log('服务器开启')
    //console.log(__filename)
   // console.log(__dirname)
}

exports.start = start