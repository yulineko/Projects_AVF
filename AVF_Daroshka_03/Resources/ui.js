var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "vertical"
});

// //1
// 
// var btn1 = Ti.UI.createView({
	// top: 200,
	// width: "100%",
	// height: 50,
	// backgroundColor: "#9f9f9f"
// });
// var btn1txt = Ti.UI.createLabel({
	// text: "Movie Reviews",
	// left: 10,
	// color: "#fff",
	// font: {fontSize: 35}
// });
// btn1.add(btn1txt);
// 
// var reviewsPage = function(){
	// var reviewWin = Ti.UI.createWindow({
		// backgroundColor: "#fff",
		// title: "Movie Reviews"
	// });
// 	
	// var backBtn = Ti.UI.createView({
		// height: 30,
		// top: 20, 
		// backgroundColor: "#9f9f9f"
	// });
	// var backTxt = Ti.UI.createLabel({
		// text: "Back",
		// color: "#fff"
	// });
	// backBtn.add(backTxt);
	// backBtn.addEventListener("click", function(){
		// reviewWin.close();
	// });
// 	
	// reviewWin.add(backBtn);
	// reviewWin.open();
// };
// 
// btn1.addEventListener("click",reviewsPage);
// 
// 



//2
var btn2 = Ti.UI.createView({
	top: 100,
	width: "100%",
	height: 50,
	backgroundColor: "#9f9f9f"
});
var btn2txt = Ti.UI.createLabel({
	text: "Movie Theaters",
	left: 10,
	color: "#fff",
	font: {fontSize: 35}
});
btn2.add(btn2txt);

var moviesPage = function(){
	var moviesWin = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: "Movie Reviews"
	});
	
	var backBtn = Ti.UI.createView({
		height: 30,
		top: 20, 
		backgroundColor: "#9f9f9f"
	});
	var backTxt = Ti.UI.createLabel({
		text: "Back",
		color: "#fff"
	});
	backBtn.add(backTxt);
	backBtn.addEventListener("click", function(){
		moviesWin.close();
	});
	
	var name = Ti.UI.createLabel({
		text: " ",
		top: 50, 
		left: 20,
		color: "#000"
	});
	
	var phone = Ti.UI.createLabel({
		text: " ",
		top: 10, 
		left: 20,
		color: "#000"
	});
	
	var address = Ti.UI.createLabel({
		text: " ",
		top: 10, 
		left: 20,
		color: "#000"
	});
	
	var crossStreet = Ti.UI.createLabel({
		text: " ",
		top: 10, 
		left: 20,
		color: "#000"
	});
	var updateUI = function(mov){
		name = mov.name;
		phone = mov.phone;
		address = mov.address;
		crossStreet = mov.crossStreet;
	};
	
	exports.moviesPage = moviesPage;
	
	moviesWin.add(backBtn);
	moviesWin.add(name);
	moviesWin.add(phone);
	moviesWin.add(address);
	moviesWin.add(crossStreet);
	moviesWin.open();
};	

btn2.addEventListener("click", moviesPage);






//3
var btn3 = Ti.UI.createView({
	top: 10,
	width: "100%",
	height: 50,
	backgroundColor: "#9f9f9f"
});
var btn3txt = Ti.UI.createLabel({
	text: "Make Memories",
	left: 10,
	color: "#fff",
	font: {fontSize: 35}
});
btn3.add(btn3txt);

btn3.addEventListener("click",function(){
	Titanium.Media.showCamera({
		success:function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: '+event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				// var imageView = Ti.UI.createImageView({
					// width:win.width,
					// height:win.height,
					// image:event.media
				// });
				// win.add(imageView);
			} else {
				alert("got the wrong type back ="+event.mediaType);
			}
		},
		cancel:function() {
			// called when user cancels taking a picture
		},
		error:function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({title:'Camera'});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery:true,
	    // allowEditing and mediaTypes are iOS-only settings
		allowEditing:true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
});


//win.add(btn1);
win.add(btn2);
win.add(btn3);

win.open(); 