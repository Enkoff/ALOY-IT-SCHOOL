export const average = (numsArray) => {
  let total = 0;
  let omissions = 0;

  for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i].estimation !== 'Пропуск') {
      total += numsArray[i].estimation;
    } else {
      omissions += 1;
    }

  }
  return total / (numsArray.length - omissions);
};
