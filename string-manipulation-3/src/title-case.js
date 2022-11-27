/* exported titleCase */

function titleCase(title) {

  var breakDown = title.split(' ');
  // console.log(breakDown);
  // console.log(breakDown[0].toLowerCase());

  for (var i = 0; i < breakDown.length; i++) {
    var lowerCase = breakDown[i].toLowerCase();
    // console.log(lowerCase);
    if (lowerCase.length > 3) {
      var firstLetter = lowerCase.charAt(0).toUpperCase();
      var rest = lowerCase.slice(1);
      var fullWord = firstLetter + rest;
      // console.log(fullWord);
      // console.log(breakDown[0]);
      // console.log(lowerCase);
      return fullWord;
    } else if (breakDown[0].length <= 3) {
      var short = breakDown[0];
      var firstLet3 = short.charAt(0).toUpperCase();
      var restShort = short.slice(1).toLowerCase();
      var fullShortWord = firstLet3 + restShort;
      // console.log(fullShortWord);
      return fullShortWord;
    }
  }

}
