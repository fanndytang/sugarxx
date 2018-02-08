function route(pathname) {
    var msg = ''
    switch(pathname) {
        case '/start':
            // res.write('这是start')
            msg = 'this is start'
            break;
        case '/upload':
            // res.write('这是upload')
            msg = 'this is upload'
            break;
        case '/test':
            // res.write('这是upload')
            msg = 'this is test'
            break;
        default:
            msg = 'unknow'
            break;
    }

    return msg
}

exports.route = route