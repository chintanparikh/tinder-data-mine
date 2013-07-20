$(document).ready(function() {
	Parse.initialize("OcPohYdwHFzg6cR9xSZXx7uhxzFzpbvdFb7ZPpSg", "M4dL5JR4BNzgYyiynVwcwqnC2PKguU8TUoyUqwPq")

	$('.auth').click(function(){
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