export const lessonValidation = (groupName, date) => {
  const checkInputs = () => {
    if (groupName.length === 0) {
      return {
        variant: "warning",
        title: "НАЗВА ГУРПИ",
        subTitle: "поле група не може бути порожнім",
        strong: "Перевір",
        isAlert: true,
      };
    }

    if (date.length === 0) {
      return {
        variant: "warning",
        title: "ДАТА",
        subTitle: "поле дата не може бути порожнім",
        strong: "Перевір",
        isAlert: true,
      };
    }
    return true;
  };

  return checkInputs();
};
