window.snapKitInit = function() {
  var loginButtonIconId = "my-login-button-target";
  // Mount Login Button
  snap.loginkit.mountButton(loginButtonIconId, {
    clientId: "ee41108b-55a2-425e-a5d0-b04817745293",
    redirectURI: "https://snap-vote.com/content",
    scopeList: ["user.display_name", "user.bitmoji.avatar"],
    handleResponseCallback: function() {
      snap.loginkit
        .fetchUserInfo()
        .then(data => console.log("User info:", data));
    }
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js,
    sjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://sdk.snapkit.com/js/v1/login.js";
  sjs.parentNode.insertBefore(js, sjs);
})(document, "script", "loginkit-sdk");
