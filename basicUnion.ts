const combine = (input1: number | string, input2: number | string) => {
  let res;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }

  return res;
};

const combinedNum = combine(5, 9);
console.log(combinedNum);

const combinedNames = combine('Vedansh', 'Mehra');
console.log(combinedNames);
