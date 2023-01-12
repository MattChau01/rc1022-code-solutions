const graduate = function (credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Matt Chau'));
console.log(lawSchool('Matt Chau'));
