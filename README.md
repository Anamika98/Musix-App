# Spotify.js - This is a file used to store our local environment variables.

**For authentication API - *** -------------------------------------------------------

 To access an API we need to have a - 
**clientID** - We get from API website after logging in and taking permissions to use API,
 **endpoint** - We get from the API website,
  **redirectURL** - Where we want to redirect after the aunthentication API does it's job. In this case - http://localhost:3000/

Additionaly we can have the - **scopes** - These are the permissions that we will have from the API.
**response_type=token**   - To tell the API that we want response as token which we will get in the URL after getting logged in.
**show_dialog=true** - A dialog will come at the end.


# Finally our URL will look like this - `${authEndpoint}
?client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join('%20')}
&response_type=token         
&show_dialog=true`;


--------------------------------------------------------------

