const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        return res.end('Welcome page');
    }
    if(req.url === '/about'){
        return res.end('About page')
    }
    res.end(`
        <h1>Oops</h1>
        <a href='/'>click here</a>
    `)
});

server.listen(5000)