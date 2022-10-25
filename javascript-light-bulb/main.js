var numbers = 0;

function swap(event) {

  numbers++;
  if (numbers % 2 !== 0) {
    $click.className = 'circle-button two';
    $back.className = 'container-main two';
  } else {
    $click.className = 'circle-button';
    $back.className = 'container-main';
  }
}

var $back = document.querySelector('.container-main');
var $click = document.querySelector('.circle-button');
$click.addEventListener('click', swap);
