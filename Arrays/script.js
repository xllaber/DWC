let array = [1, 2, 1, 9, 2, 1, 9, 8, 1, 3];
let array2 = [4, 5, 6, 2, 6];

// let num = parseInt(prompt("Numero"));
// console.log(array.indexOf(num));

// array.forEach(e => console.log(e));

console.log(
    array.filter((n, index) => array.indexOf(n) === index)
);
// console.log(
//     array.filter((e, i, a) => a.findIndex(n => n === e) === i)
// )

// let primeNumbers = array.filter(e => e % 2 !== 0);
// console.log(primeNumbers);

let combinedArray = [...array, ...array2];
console.log(combinedArray);
combinedArray.sort((min, max) => max - min);
console.log(combinedArray);

// let total = 0;
// array.forEach(e => total += e);
// console.log(total);