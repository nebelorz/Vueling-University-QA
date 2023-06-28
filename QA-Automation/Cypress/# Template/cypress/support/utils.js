// Utility functions to generate data or perform general actions.
cy.getFlightDate = () => {
  const today = new Date();
  let flightDate = new Date();
  let flightDateDay;
  let flightDateMonth;

  flightDate.setDate(today.getDate() + 2);
  if (flightDate.getDate() < 10) {
    flightDateDay = flightDate.getDate().toString().padStart(2, "0");
  } else {
    flightDateDay = flightDate.getDate();
  }

  if (flightDate.getMonth() + 1 < 10) {
    flightDateMonth = (flightDate.getMonth() + 1).toString().padStart(2, "0");
  } else {
    flightDateMonth = flightDate.getMonth() + 1;
  }

  const flightDateYear = flightDate.getFullYear();
  const flightDateFormatted = `${flightDateDay} / ${flightDateMonth} / ${flightDateYear}`;
  return flightDateFormatted;
};

cy.getFalseDate = () => {
  const today = new Date();
  let falseDate = new Date();
  falseDate.setDate(today.getDate() + 2);
  const falseDateDay = falseDate.getDate();
  const falseDateMonth = falseDate.getMonth();
  const falseDateYear = falseDate.getFullYear();
  const falseDateFormatted = `${falseDateDay} / ${falseDateMonth} / ${falseDateYear}`;
  return falseDateFormatted;
};

cy.getFutureDate = () => {
  const today = new Date();
  let newDate = new Date();
  newDate.setDate(today.getDate() + 365);
  const newDateDay = newDate.getDate();
  const newDateMonth = newDate.getMonth() + 1;
  const newDateYear = newDate.getFullYear();
  const newDateFormatted = `${newDateDay} / ${newDateMonth} / ${newDateYear}`;
  return newDateFormatted;
};

cy.getRandomCulture = () => {
  const cultures = [
    "de-DE",
    "en-GB",
    "es-ES",
    "ca-ES",
    "eu-ES",
    "fr-FR",
    "gl-ES",
    "it-IT",
    "nl-NL",
    "pt-PT",
    "ru-RU",
  ];
  const random = Math.floor(Math.random() * cultures.length);
  const cultureTestcase = cultures[random];
  return cultureTestcase;
};

cy.getDobByAge = (age) => {
  const flightDate = cy.getFlightDate();
  const yearDate = flightDate.toString().slice(-4);
  let dobYear = parseInt(yearDate) - age;
  let dob = flightDate.toString().replace(/\d{4}$/, dobYear);
  return dob;
};

cy.formatNumberLength = (num, length) => {
  let r = "" + num;

  while (r.length < length) {
    r = "0" + r;
  }

  return r;
};

cy.charDNI = (dni) => {
  let chain = "TRWAGMYFPDXBNJZSQVHLCKET";
  let pos = dni % 23;
  let letter = chain.substring(pos, pos + 1);
  return letter;
};

cy.getRandomDNI = () => {
  let num = Math.floor(Math.random() * 100000000);
  let sNum = cy.formatNumberLength(num, 8);
  return sNum + cy.charDNI(sNum);
};

cy.getRandomNumber = () => {
  let randomNumber = "";
  let possible = "0123456789";

  for (let i = 0; i < 9; i++) {
    randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return randomNumber;
};

cy.getRandomString = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters.charAt(randomIndex);
    randomString += randomChar;
  }

  return randomString;
};
