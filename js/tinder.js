$(document).ready(function() {
	Parse.initialize("OcPohYdwHFzg6cR9xSZXx7uhxzFzpbvdFb7ZPpSg", "M4dL5JR4BNzgYyiynVwcwqnC2PKguU8TUoyUqwPq")

	$('.auth').click(function(){

		if (typeof FB === "undefined")
		{
			function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "http://connect.facebook.net/en_US/all.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		}
	    FB.login(function(response) {
	      token = response.authResponse.accessToken;
	      id = response.authResponse.userID;
	      if (token && id) {
	        console.log("Facebook token: " + token);
	        console.log("Facebook ID: " + id);
	        auth(token);
	        $('.auth').remove();
	      } else {
	        console.log('User cancelled login or did not fully authorize.');
	      }
	    }, {});
  });
});

function auth(token)
{
	$.ajax({
		type: "POST",
		url: "https://api.tinder.com/auth",
		data: {"facebook_token": token},
		success: function(response) {
			console.log(response);
		}
	})
}