var http = require('http')

http.createServer((req, res) =>
{
    res.write('Ground control to major tom.')
    res.end()
}).listen(3000)