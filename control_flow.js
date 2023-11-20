// Conditional Statements (if, else if, else)
let x = 10;

if (x > 10) {
    console.log("x is greater than 10");
} else if (x === 10) {
    console.log("x is equal to 10");
} else {
    console.log("x is less than 10");
}

// Loops (for, while, do-while)
// For Loop
console.log("Table of two:")
for (let i = 1; i < 11; i++) {
    let result = 2 * i;
    console.log(`2 * ${i} = ${result}`);
}

// While Loop
console.log("Table of Three:")
let j = 1;
while (j <11) {
    let result = 3*j;
    console.log(`3 * ${j} = ${result}`);
    j++;
}

// Do-While Loop
console.log("Table of Four:")
let k = 1;
do {
    let result = 4*k;
    console.log(`4 * ${k} = ${result}`);
    k++;
} while (k < 11);
