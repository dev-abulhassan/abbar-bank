/**
 * step - 1: add click even handler with submit button
 * step - 2: grt the email address inside the email input field 
 * "allows remember to use .value to get text from an input field"
 * step -3: get password
 * 
 * */ 

document.getElementById('btn-login').addEventListener('click', function () {
   // console.log('submit btn working');
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   // console.log(email)
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
   console.log(password)
})