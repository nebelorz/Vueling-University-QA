// 7- Obtener el promedio de las edades de los usuarios mayores de edad

function getAverage(array) {
  let average = 0;

  array.forEach((age) => {
    average += age;
  });

  return average / array.length;
}

function getAdults(people) {
  const adults = [];

  people.forEach((person) => {
    if (person >= 18) {
      adults.push(person);
    }
  });

  return adults;
}

// Usando .filter()
function getAverageUsingFilter(array) {
  let filteredArray = array.filter((element) => element >= 18);
  let sum = 0;

  filteredArray.forEach((element) => {
    sum += element;
  });

  return sum / filteredArray.length;
}

const peopleAges = [18, 28, 80, 15, 8, 66, 1, 92, 43, 23];
console.log("La media de edad es: " + getAverage(getAdults(peopleAges)));
console.log("La media de edad es: " + getAverageUsingFilter(peopleAges));
