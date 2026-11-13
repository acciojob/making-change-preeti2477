const makeChange = (c) => {
  let amount = Number(c); // prompt gives string, convert to number

  let q = Math.floor(amount / 25);
  amount = amount % 25;

  let d = Math.floor(amount / 10);
  amount = amount % 10;

  let n = Math.floor(amount / 5);
  amount = amount % 5;

  let p = amount;

  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));