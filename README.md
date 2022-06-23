# Project Euler 026 - Reciprocal Cycles

A unit fraction contains 1 in the numerator.  The decimal representation of the unit fractions with denominators 2 to 10 are given:

    1/2  = 0.5

    1/3  = 0.(3)

    1/4. = 0.25

    1/5. = 0.2

    1/6. = 0.1(6)

    1/7  = 0.(142857)

    1/8. = 0.125

    1/9. = 0.(1)

    1/10 = 0.1

Where 0.1(6) means 0.16666..., and has a 1-digit recurring cycle.  It can be seen that 1/7 has a 6-digit recurring cycle.

The aim is to find the value of d less than n, for which 1/d contains the longest recurring cycle in its decimal fraction part.

Information at [Project Euler 026](https://projecteuler.net/problem=26)

## UX

**Getting Started**

Enter a whole number (denominator) between 2 and 1000 in the input field and click on the Submit Button.  As long as your input is valid, you will see the value of d less than the number, for which 1/d contains the longest recurring cycle in its decimal fraction part.  For example, if you entered 700, you would expect to get 659.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 1000
- Enering a number, but it is not an integer

As a user, I expect the function `reciprocalCycles(700)` to return a number.

As a user, I expect the function `reciprocalCycles(700)` to return 659.

As a user, I expect the function `reciprocalCycles(800)` to return 743.

As a user, I expect the function `reciprocalCycles(900)` to return 887.

As a user, I expect the function `reciprocalCycles(1000)` to return 983.

**Information Architecture**

The function `reciprocalCycles(n)` returns a number, where `n` is a number between 2 and 1000.