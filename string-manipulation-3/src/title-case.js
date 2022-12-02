/* exported titleCase */

function titleCase(title) {
  var conjunctions = ['and', 'or', 'nor', 'but', 'for', 'in', 'of', 'the', 'on', 'to'];
  var lowerCase = title.toLowerCase();
  lowerCase = lowerCase.replace('javascript', 'JavaScript');
  lowerCase = lowerCase.replace('api', 'API');
  var breakDown = lowerCase.split(' ');

  breakDown[0] = breakDown[0].charAt(0).toUpperCase() + breakDown[0].slice(1);

  // console.log(breakDown[0]);

  for (var i = 0; i < breakDown.length; i++) {
    if (!(conjunctions.includes(breakDown[i]))) {
      var firstLetter = breakDown[i].charAt(0).toUpperCase();
      var rest = breakDown[i].slice(1);
      breakDown[i] = firstLetter + rest;
      // console.log(breakDown[i]);
    }
    // colon

    for (var k = 0; k < breakDown[i].length; k++) {
      if (breakDown[i][k - 1] === '-') {
        breakDown[i] = breakDown[i].slice(0, k) + breakDown[i][k].toUpperCase() + breakDown[i].slice(k + 1);
      }
    }

    for (var l = 0; l < breakDown[i].length; l++) {
      if (breakDown[i][l] === ':') {
        // console.log(breakDown[i + 1]);
        // var afterColon = breakDown[i + 1];
        // console.log(afterColon.charAt(0).toUpperCase() + afterColon.slice(1, l));
        breakDown[i + 1] = breakDown[i + 1].charAt(0).toUpperCase() + breakDown[i + 1].slice(1, l);
        // console.log(breakDown[i + 1]);
      }
    }

  }
  var final = breakDown.join(' ');
  // console.log(final);
  return final;
}
