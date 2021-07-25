export const classWorkValidation = (
  classWorkDate,
  subject,
  lesson,
  estimation,
  author,
  reating,
  isLesson
) => {
  const chekReating = () => {
    let res = true;
    reating.forEach((el) => {
      if (el.date === classWorkDate && el.lesson === lesson) {
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
    if (classWorkDate.length === 0) {
      return {
        variant: "warning",
        title: "поле Дата не має бути порожнім!",
      };
    }

    if (!validateDate(classWorkDate)) {
      return {
        variant: "warning",
        title: "формат даты повинен бути 2021-07-21",
      };
    }

    if (estimation === "Пропуск" && isLesson) {
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
        title: `Ви вже додал оцінку для уроку ${lesson} на ${classWorkDate}!`,
      };
    }
    return true;
  };
  return checkInputs();
};
