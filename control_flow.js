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

__________________________________________________________________________________________________________________________________________
output:
x is equal to 10
Table of two:
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
Table of Three:
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30
Table of Four:
4 * 1 = 4
4 * 2 = 8
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40
