const ADMIN_PASSWORD = prompt('Enter your password');
let message;

if (ADMIN_PASSWORD === null) {
  message = 'User cancelled!';
} else if (ADMIN_PASSWORD === 'jqueryismyjam') {
  message = 'Welcome!';
} else {
  message = 'Access denied, incorrect password!';
}

alert(message);
