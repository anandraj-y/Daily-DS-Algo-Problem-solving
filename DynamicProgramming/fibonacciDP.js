/**
 * Fibonacci using DP
 * Storing results into cache and using them if applicable
 * Time complexity O(n)
 * For calculating Fib(6), we are storing cache of 5,4,3 in cache
 * Recursion would have taken O(2^n)
 */

const inputCache = {
  1: 1,
  2: 1,
};

const fib = (n, cache) => {
  if (cache[n]) return cache[n];
  let sum = fib(n - 2, cache) + fib(n - 1, cache);
  cache[n] = sum;
  return sum;
};

console.log(fib(10, inputCache));
