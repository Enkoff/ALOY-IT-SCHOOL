export const reatingValidation = (
  subject,
  lesson,
  estimation,
  author,
  reating,
  date
) => {
  const chekReating = () => {
    let res = true;
    reating.forEach((el) => {
      if (el.date === date && el.lesson === lesson) {
        res = false;
      }
    });
    return res;
  };

  const checkInputs = () => {
    if (reating.length === 3) {
      return {
        variant: "info",
        title: `На сьогодні ви додали вже всі оцінки студенту!!!`,
        isAlert: true,
      };
    }
    if (subject.length === 0) {
      return {
        variant: "warning",
        title: "Поле предмет не має бути порожнім!",
        isAlert: true,
      };
    }

    if (lesson.length === 0) {
      return {
        variant: "warning",
        title: "поле урок не може бути порожнім!",
        isAlert: true,
      };
    }

    if (estimation.length === 0) {
      return {
        variant: "warning",
        title: "поле оцінка не може бути порожнім!",
        isAlert: true,
      };
    }

    if (author.length === 0) {
      return {
        variant: "warning",
        title: "поле викладч не може бути порожнім!",
        isAlert: true,
      };
    }

    if (!chekReating()) {
      return {
        variant: "error",
        title: `Ви вже додал оцінку на урок ${lesson}!!!`,
        isAlert: true,
      };
    }
    return true;
  };
  return checkInputs();
};
