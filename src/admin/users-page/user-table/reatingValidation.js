export const reatingValidation = (
  subject,
  lesson,
  estimation,
  author,
  reating,
  date,
  isLesson
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
    if (estimation === 'Пропуск' && isLesson) {
      return {
        variant: "warning",
        title: `Якщо в полі оцінка стоїть пропуск то чек бокс повинен бути порожній!`,
      };
    }
    if (subject.length === 0) {
      return {
        variant: "warning",
        title: "Поле предмет не має бути порожнім!",
      };
    }

    if (lesson.length === 0) {
      return {
        variant: "warning",
        title: "поле урок не може бути порожнім!",
      };
    }

    if (estimation.length === 0) {
      return {
        variant: "warning",
        title: "поле оцінка не може бути порожнім!",
      };
    }

    if (author.length === 0) {
      return {
        variant: "warning",
        title: "поле викладч не може бути порожнім!",
      };
    }

    if (!chekReating()) {
      return {
        variant: "error",
        title: `Ви вже додал оцінку на урок ${lesson}!`,
      };
    }
    return true;
  };
  return checkInputs();
};
