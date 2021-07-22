export const average = (numsArray) => {
  let total = 0;
  for (let i = 0; i < numsArray.length; i++) {
    total += numsArray[i].estimation;
  }
  return total / numsArray.length;
};
