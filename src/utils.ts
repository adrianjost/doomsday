const minYear = 0;
const maxYear = 4000;

export function randomDate(): Date {
  const randomYear =
    Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 30) + 1;
  return new Date(randomYear, randomMonth, randomDay);
}
