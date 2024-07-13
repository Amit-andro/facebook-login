window.fbAsyncInit = function() {
    FB.init({
      appId            : '795422859405830',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v20.0'
    });
  
    // Check if the user is already logged in
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };
  
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  // Function to handle the response from Facebook login
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      console.log('Logged in and authenticated');
      document.getElementById('status').innerHTML = 'Logged in and authenticated';
      // Fetch user data or perform actions on behalf of the user
      fetchUserData();
    } else {
      console.log('Not authenticated');
      document.getElementById('status').innerHTML = 'Not authenticated';
    }
  }
  
  // Function to handle login
  function login() {
    FB.login(function(response) {
      statusChangeCallback(response);
    }, {scope: 'public_profile,email'});
  }
  
  // Function to fetch user data
  function fetchUserData() {
    FB.api('/me', {fields: 'name,email'}, function(response) {
      console.log('Successful login for: ' + response.name);
      console.log('User email: ' + response.email);
      document.getElementById('status').innerHTML = 'Logged in as: ' + response.name + '<br>Email: ' + response.email;
    });
  }
  
  document.getElementById('login-btn').addEventListener('click', login);
  