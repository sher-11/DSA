//Solution 1:
//Certain number of characters
const printFibonacciSeries = (end) => {
    let firstTerm = 0;
    let secondTerm = 1;
    let nextTerm;

    
    for (let i = 0; i < end; i++) {
        console.log(firstTerm);
        nextTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;

    }
}

console.log(printFibonacciSeries(5));
console.log(printFibonacciSeries(15));

//Solution 2:
//Up to certain number
const printFibonacciSeriesUpTo = (number) => {
    let firstTerm = 0;
    let secondTerm = 1;
    let nextTerm;
    console.log(firstTerm);
    console.log(secondTerm);

    nextTerm = firstTerm + secondTerm;

    while (nextTerm <= number) {
        console.log(nextTerm);
        firstTerm = secondTerm;
        secondTerm = nextTerm;
        nextTerm = firstTerm + secondTerm;
    }
}


console.log(printFibonacciSeriesUpTo(112))
