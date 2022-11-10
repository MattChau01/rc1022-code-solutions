function getRangeReport(start, end) {
  var array = [];
  var total = 0;
  var odds = [];
  var evens = [];
  var range = array;
  var average = 0;

  while (start <= end) {
    array.push(start++);
  }

  for (var a = 0; a < array.length; a++) {
    total += array[a];
    if (array[a] % 2 === 0) {
      evens.push(array[a]);
    }

    if (array[a] % 2 !== 0) {
      odds.push(array[a]);
    }
  }

  average = total / end;

  var object = {
    total,
    odds,
    evens,
    range,
    average
  };

  return object;
}

getRangeReport(1, 5);
