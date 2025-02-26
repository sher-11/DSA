const factorial = (number) => {
    if (number == 0 || number == 1) return 1;

    for (let i = 1; i < number; i++) {
       return number * factorial(number - 1);
    }
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(10));