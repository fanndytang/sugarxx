let http = require('http')   //引入http模块

function start(route) {
    function onRequest(req, res) {
        let head = {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With,content-type",
            "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
        }
        res.writeHead(200, head);
        route(req, res);
        res.end();
    }

    http.createServer(onRequest).listen(8888)
    console.log('服务器开启')
}

exports.start = start