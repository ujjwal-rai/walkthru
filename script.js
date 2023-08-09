// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      var user = userCredential.user;
      console.log('Logged in user:', user);
      // Redirect or perform additional actions
    })
    .catch((error) => {
      // Handle login errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
    });
}
