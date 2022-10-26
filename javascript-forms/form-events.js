function handleFocus(event) {
  console.log('focus');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of name: ', event.target.name, event.target.value);
}

var $name = document.getElementById('user-name');
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
var $email = document.getElementById('user-email');
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
var $message = document.getElementById('user-message');
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
