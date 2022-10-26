const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type' , 'text/html');
    let path = './views/';
    switch (req.url) {

        case '/':
            res.statusCode = 201;
            path += 'index.html';
            break;
        case '/about':
            res.statusCode = 201;
            path += 'about.html';
            break;
        case '/contact-me':
            res.statusCode = 201;
            path += 'contact-me.html';
            break;
        default:
            res.statusCode = 404;
            path += '404.html';
            break;

    }

    fs.readFile( path , (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
          res.end(data);
        }
    })


});

server.listen( 8080 , 'localhost' , ()=>{
    console.log('server is listening on port 8080');
});