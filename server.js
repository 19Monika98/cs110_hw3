const http = require('http');

const mySerever = http.createServer(function (req, res){
     if (req.url ==='/name') {
     	 res.writeHead(200, {'Content-Type' : 'text/plain'});
     	 res.end ('Hello. My name is Monika');
     }

     if (req.url === '/information') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('I am a computer science student at the best university in Armenia');
     }

     if (req.url === '/age') {
     	res.writeHead(404, {'Content-Type' : 'text/plain'});
     	res.end('Error 404 not found');
     }


     if (req.url === '/instructor') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('Rouben Meschian; the best instructor in the world');
	 }


      if (req.url === '/quote') {
	 res.writeHead(404, {'Content-Type' : 'text/plain'});
	 res.end('You are successful with life if you know how to walk with joy even through hell. (c) Sadhguru Jaggi Vasudev');
	 }

	 res.writeHead(404, {'Content-Type' : 'text/plain'});
	 res.end("here are some enteries");
 
});

			mySerever.listen(3001);
			console.log('Server is currently listening to 3001');
