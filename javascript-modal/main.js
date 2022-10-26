var clicks = 0;

function popUp(event) {
  clicks++;
  if (clicks % 2 !== 0) {
    $div.classList.remove('hidden');
  } else if (clicks % 2 === 0) {
    $div.classList.add('hidden');
  }
}

var $div = document.getElementById('first');
var $close = document.querySelector('.bttn-pop-close');
$close.addEventListener('click', popUp);
var $open = document.querySelector('.bttn-pop');
$open.addEventListener('click', popUp);
