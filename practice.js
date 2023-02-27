// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 22, 3, 12));
// console.log(Math.max(5, `22`, 3, 12));
// console.log(Math.max(5, `22px`, 3, 12));

// console.log(Math.min(5, 22, 3, 12));

// console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// //Rounding Ints
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.9));
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// console.log(2 ** 53 - 1);

// const future = new Date(2037, 10, 19, 15, 13);

// console.log(+future);
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);
const num = 3884764.23;
const options = {
  style: `unit`,
  unit: `mile-per-hour`,
};

console.log(`US    `, new Intl.NumberFormat(`en-US`, options).format(num));
console.log(`Germany    `, new Intl.NumberFormat(`de-De`, options).format(num));
