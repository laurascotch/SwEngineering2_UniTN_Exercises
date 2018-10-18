if (process.argv.length <= 2) {
    console.log("Usage: node sunrisesunset.js città");
    process.exit(-1);
}

var https = require('https');

var mapurl = "https://www.mapquestapi.com/geocoding/v1/address?key=58MCyVFgKGYLRPCxslG4ZwpgTfA5e1Bg&inFormat=kvp&outFormat=json&location=";

var args = "";

for (i=2; i<process.argv.length; i++){
	if(i==2){
		args += process.argv[i];
	} else {
		args += " " + process.argv[i]; //per città il cui nome è composto da più parole
	}
}

mapurl += args;

https.get(mapurl, function (resp) {

	var data = "";

	// We receive the response data in a stream, so here
	// we specify what to do with each chunk we receive
	resp.on("data", function (chunk) {
		data += chunk;
	});

	// We specify what to do when we finish receiving the
	// stream of data.
	resp.on("end", function () {
		// We receive the content as "text" and print it
		var mapobj = JSON.parse(data);

		var lat = mapobj.results[0].locations[0].latLng.lat;
		var lng = mapobj.results[0].locations[0].latLng.lng;

		var ssurl = "";

		var ssurl1 = "https://api.sunrise-sunset.org/json?lat=";
		var ssurl2 = "&lng=";

		ssurl += ssurl1 + lat + ssurl2 + lng + "&date=today";

		https.get(ssurl, function (resp) {

			var data = "";

			// We receive the response data in a stream, so here
			// we specify what to do with each chunk we receive
			resp.on("data", function (chunk) {
				data += chunk;
			});

			// We specify what to do when we finish receiving the
			// stream of data.
			resp.on("end", function () {
				// We receive the content as "text" and print it
				var obj = JSON.parse(data);

				var sunrise = obj.results.sunrise;
				var sunset = obj.results.sunset;

				console.log("\n");
				console.log("Selected city: " + args + "\nToday's sunrise: " + sunrise + " UTC\nToday's sunset: " + sunset + " UTC");
				console.log("\n");

			});

		}).on("error", function (err) {
			console.log("Error: " + err.message);
		});

	});

}).on("error", function (err) {
	console.log("Error: " + err.message);
});