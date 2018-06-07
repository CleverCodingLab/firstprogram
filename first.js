var http= require('http');
function onRequest(request, response) {

    console.log(request.url);
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();


}

http.createServer(onRequest).listen(8888);

console.log('sever is now running');

