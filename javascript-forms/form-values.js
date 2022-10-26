var $form = document.getElementById('contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;
  var object = { name, email, message };
  console.log(object);
  var $reset = document.getElementById('contact-form').reset();
  return $reset;
}
);
