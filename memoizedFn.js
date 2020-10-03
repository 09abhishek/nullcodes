
// a simple memoized function to find Factorial
const memoizedFactorial = () => {
  let cache = {};
  return function _factorial(n) {
    if (n < 2) {
        return 1;
    }
    if (!cache[n]) {
        console.log('Calculating factorial');
        cache[n] = n * _factorial(n-1);
    }
    return cache[n];
  }
}

const memoFact = memoizedFactorial();
console.log(memoFact(8)); // calculated value
console.log(memoFact(8)); // cached
