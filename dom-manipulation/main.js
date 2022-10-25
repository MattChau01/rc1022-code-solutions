var numbers = 0;

function counter() {
  numbers++;
  $count.textContent = 'Clicks: ' + numbers;
  if (numbers < 4) {
    $button.className = 'hot-button cold';
  } else if (numbers < 7) {
    $button.className = 'hot-button cool';
  } else if (numbers < 10) {
    $button.className = 'hot-button tepid';
  } else if (numbers < 13) {
    $button.className = 'hot-button warm';
  } else if (numbers < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
}

var $button = document.querySelector('.hot-button');
var $count = document.querySelector('.click-count');

$button.addEventListener('click', counter);
