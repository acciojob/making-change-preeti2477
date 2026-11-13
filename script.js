const makeChange = (c) => {
  // your name here
	function makeChange(amount) {
  let q = Math.floor(amount / 25);
  amount = amount % 25;

  let d = Math.floor(amount / 10);
  amount = amount % 10;

  let n = Math.floor(amount / 5);
  amount = amount % 5;

  let p = amount; // remaining is pennies

  return { q, d, n, p };
}

console.log(makeChange(47)); // { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // { q: 0, d: 2, n: 0, p: 4 }
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
