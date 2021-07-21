export const lessonValidation = (groupName, date) => {
  function validateDate(d) {
    const pattern = /^([0-9]{4}[-]?((0[13-9]|1[012])[-]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-]?31|02[-]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-]?02[-]?29)$/;

    console.log(pattern.test(d));
    if (!pattern.test(d)) {
      return false;
    } else {
      return true;
    }
  }
  const checkInputs = () => {
    if (groupName.length === 0) {
      return {
        variant: "warning",
        title: "поле група не може бути порожнім",
        isAlert: true,
      };
    }

    if (date.length === 0) {
      return {
        variant: "warning",
        title: "поле дата не може бути порожнім",
        isAlert: true,
      };
    }

    if (!validateDate(date)) {
      return {
        variant: "warning",
        title: "формат даты повинен бути 2021-07-21",
        isAlert: true,
      };
    }
    return true;
  };

  return checkInputs();
};
