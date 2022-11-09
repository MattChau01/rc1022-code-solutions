var $countdown = document.querySelector('.countdown-display');
var interval = setInterval(timer, 1000);
var start = 4;
var finalText = '~Earth Beeeelooowww Us~';

function timer() {
  setTimeout(countdown, 1000);
}

function countdown() {
  $countdown.textContent = start--;
  if (start < 0) {
    $countdown.textContent = finalText;
    clearInterval(interval);
  }
}
