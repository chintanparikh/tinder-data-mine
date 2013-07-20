$(document).ready(function() {
	Parse.initialize("OcPohYdwHFzg6cR9xSZXx7uhxzFzpbvdFb7ZPpSg", "M4dL5JR4BNzgYyiynVwcwqnC2PKguU8TUoyUqwPq")

	$('.auth').click(function(){
    FB.login(function(response) {
      token = response.authResponse.accessToken;
      id = response.authResponse.userID;
      if (token && id) {
        console.log("Facebook token: " + token);
        console.log("Facebook ID: " + id);
        authTinder();
        $('.auth').remove();
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {});
  });
});