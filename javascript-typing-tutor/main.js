
document.addEventListener('keydown', typer);

var letter = document.querySelectorAll('span');

var counter = 0;

function typer(event) {
  if (counter < letter.length) {
    if (event.key === letter[counter].textContent) {
      letter[counter].className = 'default correct';
      if (counter < letter.length - 1) {
        counter++;
        letter[counter].className = 'default underline';
      }
    } else {
      letter[counter].className = 'default underline incorrect';
    }
  }
}
