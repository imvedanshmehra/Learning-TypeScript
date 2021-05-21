const add = (a: number, b: number) => {
  return a + b;
};

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(5, 9));
