var $message = document.querySelector('.message');
setTimeout(newMessage, 2 * 1000);

function newMessage() {
  $message.innerHTML = 'Hello There';
}
