/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var letterOfFirst = person.firstName[0];
  var letterOfLast = person.lastName[0];
  var firstInitials = letterOfFirst + letterOfLast;
  return firstInitials;
}
