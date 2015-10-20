var getData = function(){

	var getGeo = require("geo");
	var url = "https://api.foursquare.com/v2/venues/search?query=movie,theater&limit=10&ll="+ getGeo.loc +"&oauth_token=JQIRJBG4OGIU45V4XUJGKYCBJDPWU4DAVV3JSIFUXL4DBY5I&v=20151019";
	//var url = "http://api.wunderground.com/api/d1e578e5aa05dc1d/geolookup/conditions/forecast/q/"+ getGeo.loc +".json";
	if (Ti.Network.online) {
	     var data = Ti.Network.createHTTPClient();
	     data.onload = function(e){
	          console.log(e);  
	          var json = JSON.parse(this.responseText);  
	   
	          var array = [];
	          
	          for(i=0, j=json.response.venues.length; i<j; i++){
		          	var info = {
			          	  name: json.response.venues[i].name,
			          	  phone: json.response.venues[i].contact.formattedPhone,
			          	  address: json.response.venues[i].location.formattedAddress,
			          	  crossStreet: json.response.venues[i].location.crossStreet
		          	};
		          	array.push(info);
		          	//console.log(info);
	          }
	          		
	          
	          var db = require("db"); 
	          db.save(info);
	          var cloud = require("cloud");
	          cloud.login(array);
			  
	     }; 
	     data.open("GET", url);
	     data.send();
	}else{
	     alert("Network currently unavailable.");
	     timeout: 5000;
	}; 
};


exports.getData = getData;