function solution(number) {
  if (number < 0 || !Number.isInteger(number)) {
    return 0
  }
  
  
  let multiples = new Set();
  const initialValue = 0;

  const sum = [...Array(number).keys()].reduce((accumulator, currentValue) => {
    if (currentValue < 0) {
      currentValue = 0;
    }
    if ((currentValue % 3 === 0 || currentValue % 5 === 0) && !multiples.has(currentValue)) {
      multiples.add(currentValue);
      return accumulator + currentValue;
    }
    return accumulator;
  }, initialValue);

  return sum;
}
