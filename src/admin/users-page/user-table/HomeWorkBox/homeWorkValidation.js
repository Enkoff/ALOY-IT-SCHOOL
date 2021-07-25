export const homeWorkValidation = (
  homeWorkDate,
  subject,
  nameHomeWork,
  estimation,
  author,
  homeWork
) => {
  const chekHomeWork = () => {
    let res = true;
    homeWork.forEach((el) => {
      if (
        el.date === homeWorkDate &&
        el.subject === subject &&
        el.nameHomeWork === nameHomeWork
      ) {
        res = false;
      }
    });
    return res;
  };
  const validateDate = (d) => {
    const pattern =
      /^([0-9]{4}[-]?((0[13-9]|1[012])[-]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-]?31|02[-]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-]?02[-]?29)$/;

    if (!pattern.test(d)) {
      return false;
    } else {
      return true;
    }
  };

  const checkInputs = () => {
    if (homeWorkDate.length === 0) {
      return {
        variant: "warning",
        title: "поле Дата не має бути порожнім!",
      };
    }
    if (!validateDate(homeWorkDate)) {
      return {
        variant: "warning",
        title: "формат даты повинен бути 2021-07-21",
      };
    }
    if (subject.length === 0) {
      return {
        variant: "warning",
        title: "поле Предмет не має бути порожнім!",
      };
    }

    if (nameHomeWork.length === 0) {
      return {
        variant: "warning",
        title: "поле Назва домашнього завдання не може бути порожнім!",
      };
    }

    if (estimation.length === 0) {
      return {
        variant: "warning",
        title: "поле Оцінка не може бути порожнім!",
      };
    }

    if (author.length === 0) {
      return {
        variant: "warning",
        title: "поле Викладч не може бути порожнім!",
      };
    }
    if (!chekHomeWork()) {
      return {
        variant: "error",
        title: `Ви вже додали домашне завдання з назвою ${nameHomeWork} з предмету ${subject} на дату ${homeWorkDate}!`,
      };
    }
    return true;
  };
  return checkInputs();
};
