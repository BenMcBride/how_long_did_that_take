Number.prototype.isPrime = function () {
  for (let i = 2; i < Math.sqrt(this)+2; i++) { // changed i<this; to i < Math.sqrt(this)+2;
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};
const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e6) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// recursive
function rFib( n ) {
  if ( n < 2 ) {
      return n;
  }
  return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
  const vals = [ 0, 1 ];
  while(vals.length-1 < n) {
      let len = vals.length;
      vals.push( vals[len-1] + vals[len-2] );
  }
  return vals[n];
}
iFib(20); // THIS one is faster because it has only has one loop and doesn't have to remember stored values

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = (str) => {
  string = ''
  for(var i = str.length - 1; i >= 0; i--){
      string += str[i];
  }
  return string;
}
console.log(reversed1(story)); // this goes through the string in one loop vs 3