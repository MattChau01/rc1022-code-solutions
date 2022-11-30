let count = 3;

const interval = setInterval(counter, 1000);

function counter() {

  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  } else {
    console.log(count);
    count--;
  }

}
