// Bubbles
var $bubble = document.querySelector('.column-third-circles');
$bubble.addEventListener('click', swapImage);
var $circles = document.querySelectorAll('.circle-size');

// Images
var $photos = document.querySelectorAll('.active');

function swapImage(event) {
  clearInterval(timer);

  if (event.target.matches('.circle-size')) {
    for (var j = 0; j < $circles.length; j++) {
      if ($circles[j] === event.target) {
        $circles[j].classList.remove('fa-regular');
        $circles[j].classList.add('fa-solid');
        $photos[j].classList.add('img-center');
        $photos[j].classList.remove('hidden');
        var number = parseInt($photos[j].getAttribute('id'));
        counter = number;
      } else if ($circles[j] !== event.target) {
        $circles[j].classList.add('fa-regular');
        $circles[j].classList.remove('fa-solid');
        $photos[j].classList.remove('img-center');
        $photos[j].classList.add('hidden');
      }
    }
  }
  timer = setInterval(nextImg, 3000);
}

// Arrows
var arrowR = document.querySelector('.right-arrow');
arrowR.addEventListener('click', nextImg);
var arrowL = document.querySelector('.left-arrow');
arrowL.addEventListener('click', prevImg);
var counter = 0;

// Right Arrow
function nextImg(event) {

  clearInterval(timer);
  if (counter === ($photos.length - 1)) {
    counter = -1;
  }

  counter++;
  for (var k = 0; k < $photos.length; k++) {
    if (counter === k) {
      $circles[k].classList.remove('fa-regular');
      $circles[k].classList.add('fa-solid');
      $photos[k].classList.add('img-center');
      $photos[k].classList.remove('hidden');
    } else if (counter !== k) {
      $circles[k].classList.add('fa-regular');
      $circles[k].classList.remove('fa-solid');
      $photos[k].classList.remove('img-center');
      $photos[k].classList.add('hidden');
    }
  }
  timer = setInterval(nextImg, 3000);
}

// Left Arrow
function prevImg(event) {

  clearInterval(timer);
  if (counter === 0) {
    counter = 5;
  }

  counter--;

  for (var l = 0; l < $photos.length; l++) {
    if (counter === l) {
      $circles[l].classList.remove('fa-regular');
      $circles[l].classList.add('fa-solid');
      $photos[l].classList.add('img-center');
      $photos[l].classList.remove('hidden');
    } else if (counter !== l) {
      $circles[l].classList.add('fa-regular');
      $circles[l].classList.remove('fa-solid');
      $photos[l].classList.remove('img-center');
      $photos[l].classList.add('hidden');
    }
  }
  timer = setInterval(nextImg, 3000);

}

// Interval

var timer = setInterval(timeLapse, 3000);

function timeLapse() {
  if (counter >= 4) {
    counter = -1;
    nextImg();
  } else if (counter <= 5) {
    nextImg();
  }
}
