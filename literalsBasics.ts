enum ResultConversion {
  NUMBER,
  TEXT,
}

const combine = (
  input1: number | string,
  input2: number | string,
  resultType: ResultConversion // we give exact value as type in literal types
) => {
  let res;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === ResultConversion.NUMBER
  ) {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }

  return res;
};

const combinedNum = combine(5, 9, ResultConversion.NUMBER);
console.log(combinedNum);

const combinedNames = combine("Vedansh", "Mehra", ResultConversion.TEXT);
console.log(combinedNames);
