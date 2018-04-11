var http = require("http");

var PORTone = 7000;
var PORTtwo = 7500;

function handleRequest(request, response){
    response.end("This handle Request function works. The path that was hit:" + request.url);
}


function goodRequest(request, response){
    response.end("You got a purty mouth.");
}

function badRequest(request, response){
    response.end("Your face isn't symmetrical.");
}



var serverOne = http.createServer(goodRequest);

var serverTwo = http.createServer(badRequest);

serverOne.listen(PORTone, function(){
    console.log("The Server is listening on: http://localhost:" + PORTone)
});

serverTwo.listen(PORTtwo, function(){
    console.log("The Server is listening on: http://localhost:" + PORTtwo)
})