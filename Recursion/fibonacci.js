/**
 * Fibonacci using recursion
 * Fib series 1,1,2,3,5,8,13,21,34,55,.....
 * Time complexity O(2^n)
 */

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
};

console.log(fib(9));
