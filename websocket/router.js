function route(req, res) {
   res.write(JSON.stringify({'test': 'aasgagd'}))
}

exports.route = route