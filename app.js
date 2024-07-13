window.fbAsyncInit = function() {
    FB.init({
      appId            : '795422859405830',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v20.0'
    });
  
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };
  
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      console.log('Logged in and authenticated');
      document.getElementById('status').innerHTML = 'Logged in and authenticated';
      fetchUserData();
    } else {
      console.log('Not authenticated');
      document.getElementById('status').innerHTML = 'Not authenticated';
    }
  }
  
  function login() {
    FB.login(function(response) {
      statusChangeCallback(response);
    }, {scope: 'public_profile,email'});
  }
  
  function fetchUserData() {
    FB.api('/me', {fields: 'name,email'}, function(response) {
      console.log('Successful login for: ' + response.name);
      console.log('User email: ' + response.email);
      document.getElementById('status').innerHTML = 'Logged in as: ' + response.name + '<br>Email: ' + response.email;
    });
  }
  
  document.getElementById('login-btn').addEventListener('click', login);
  