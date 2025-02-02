var Cloud = require('ti.cloud');
Cloud.debug = true;

var loginUser = function(){
	Cloud.Users.login({
		login: 'admin',
		password: '1234'
	}, function(e){
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; 
loginUser();

var save = function(Asave){
	for(i=0, j=Asave.length; i<j; i++){
		Cloud.Objects.create({
			classname: "insta",
			fields: {
				username: Asave[i].username,
				image: Asave[i].image,
				text: Asave[i].text
			}
		}, function(e){
			if(e.success){
				console.log("SAVED TO CLOUD");
		}else{
			console.log("DATA NOT SAVED");
		}
		});
	}
};



exports.loginUser = loginUser;
exports.save = save;