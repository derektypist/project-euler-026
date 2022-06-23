// Set Up Global Array
const PRIMES = Array(1000).fill(false);
(function initPrimes(num) {
    const upper = Math.floor((num-1)/2);
    const isPrime = Array(upper).fill(true);
    const sqrtUpper = Math.floor((Math.sqrt(num)-1)/2);
    for (let i=0;i<=sqrtUpper;i++) {
        if (isPrime[i]) {
            const prime = 2*i + 3;
            PRIMES[prime] = true;
            const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
            for (let j=primeSquaredIndex;j<upper;j+=prime) {
                isPrime[j] = false;
            }
        }
    }

    for (let i=sqrtUpper + 1;i<upper;i++) {
        if (isPrime[i]) PRIMES[2*i+3] = true;
    }
})(1000);

// Function to check if the number num is a prime
function isPrime(num) {
    if (num<2) return false;
    if (PRIMES[num] !== undefined) return PRIMES[num];
    const sqrt = parseInt(Math.sqrt(num));
    for (let i=2;i<=sqrt;i++) {
        if (num%i===0) return PRIMES[num] = false;
    }
    return PRIMES[num] = true;
}

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<7 || num>1000 || !Number.isInteger(Number(num))) {
        txt += `Invalid input.  Please enter a whole number between 7 and 1000.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Value is ${reciprocalCycles(num)} for which 1/${reciprocalCycles(num)} contains the longest recurring cycle in its decimal fraction part.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Calculate Cycle Length
function cycleLength(n) {
    let k = 1, mod = 10 % n;
    while (mod !==1) {
        mod = (mod * 10) % n;
        k++;
    }
    return k;
}

/*
    Function to find the value of d less than n, where 1/d
    contains the longest recurring cycle in its decimal fraction part
    reciprocalCycles(700)  returns 659
    reciprocalCycles(800)  returns 743
    reciprocalCycles(900)  returns 887
    reciprocalCycles(1000) returns 983

*/
function reciprocalCycles(n) {
    let maxCycle = 1, winningDigit = 3;
    for (let i=7;i<=n;i++) {
        if (!isPrime(i)) continue;
        let cycle = cycleLength(i);
        if (cycle > maxCycle) {
            maxCycle = cycle;
            winningDigit = i;
        }
    }
    return winningDigit;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
