// Paper Algos
// We want you to get into the habit of using a T-diagram and doing this on paper.  This will not only help you during whiteboard exercises but will also make you a better troubleshooter and developer.  Do NOT skip this assignment please.

// Part 1

// 1.
function multiply(x, y) {
    console.log(x);
    console.log(y);
}
var b = multiply(2, 3);
console.log(b);

// 2, 3, undefined

// 2. 
function multiply(x, y) {
    return x * y;
}
var b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2));

// 6, 10

// 3.
var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
    i = i + 3;
    console.log(i);
}

// 3, 7

// 4. 
var x = 15;
console.log(x);

function foo() {
    var x = 10;
    console.log(x);
}
console.log(x);
foo();
console.log(x);

// 15, 15, 10, 15

// 5. 
for (var i = 0; i < 15; i += 2) {
    console.log(i);
}

// 0, 2, 4, 6, 8, 10, 12, 14

// 6.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(i * j);
    }
}

// 0, 0, 0, 1, 0, 2

// 7.
function foo(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) {
            console.log(i * j);
        }
    }
}
var z = foo(3, 3);
console.log(z);

// 0, 0, 0 ,0, 1, 2, 0, 2, 4, undefined

// 8. 
function foo(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            console.log(i * j);
        }
    }
    return x * y;
}
var z = foo(3, 5);
console.log(z);

// 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 2, 4, 6, 8, 15