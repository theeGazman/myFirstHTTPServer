/**myFirstHTTPServer.js
 * 
 * This simple http server for students to learn from.
 * The code contains comments, questions and answers about each major line of code.
 * Feel free to add your own code. 
 * Pleased comment it and ensure basic questions are answered.
 * 
 * Developers: 
 * 1. Stephen Bennett
 * 
 */
//Lets require/import the HTTP module. 
var http = require('http');
//Why do we this? 
//What does it do?

//Lets define a port we want to listen to
const PORT=80; 
//What is a port?
//Why port 80?
//Why do we this? 
//What does it do?

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}
//What is a request?
//What is a response?
//What is an object?
//What does the response.end function do?
//What is a function?
//Why do we this? 
//What does it do?

//Create a server
var server = http.createServer(handleRequest);
//What is a server object?
//Why do we this? 
//What does it do?

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
//What does the listen function do?
//What is console.log?
//Why do we log?
//Why do we this? 
//What does it do?
