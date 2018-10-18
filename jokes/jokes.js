/* Implement your solution here */
var https = require('http');
var url = "http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris";

https.get(url, function(resp) {

	var data = "";

	// We receive the response data in a stream, so here
	// we specify what to do with each chunk we receive
	resp.on("data", function(chunk) {
		data += chunk;
	});

	// We specify what to do when we finish receiving the
    // stream of data.
    resp.on("end", function() {
         // We receive the content as "text" and print it
         var obj = JSON.parse(data);
         console.log("\n");
         console.log(obj.value.joke);
         console.log("\n");
         //console.log(data);
    });
    
    // We receive the content as "text" and print it
    //var obj = JSON.parse(data)
	//console.log(obj.joke);
    //questo mi dovrebbe restituire la data di oggi, che è il primo "tag" nella stringa json

}).on("error", function(err) {
	console.log("Error: " + err.message);
});