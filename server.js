require("http").createServer((inRequest, inResponse) => {
	inResponse.end("Bienvenue dans mon premier serveur depuis Node Node Web server");
	}).listen(80);