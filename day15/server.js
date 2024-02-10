const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Request handling logic goes here
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    console.log(query);
    // Inside the request handler
    // deponds on the URL
    if (path === '/users') {
    // Handle the '/users' endpoint
        res.write("hello\n"); // res.write("") vs res.writeHead("");
        res.end("test");
    } else if (path === '/products') {
    // Handle the '/products' endpoint
        // Inside the "/products" endpoint handler
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // why?
        res.end('I am a list of products :p');
    } else {
    // Handle unknown endpoints
    }

});


server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});  