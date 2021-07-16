export const average = (numsArray) => {
    if (numsArray.length !== 0) {
      return numsArray.reduce((a, b) => a + b) / numsArray.length;
    } else if (numsArray.length === 1) {
      return numsArray[0];
    }
  };