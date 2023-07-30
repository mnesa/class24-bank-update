document.getElementById('login-button').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;

  const passwordField = document.getElementById('password');
  const userPassword = passwordField.value;
  // console.log(userEmail, userPassword);
 

  if (userEmail == 'admin@admin.com' && userPassword == 123456) {
  window.location.href = 'dashboard.html' ;
  }
})