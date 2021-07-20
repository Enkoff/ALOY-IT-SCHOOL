export const addStudentValidation = (email, password, name, role) => {
  const validateEmail = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  };

  const checkInputs = () => {
    if (!validateEmail(email)) {
      return {
        variant: "warning",
        title: "ІМЕЙЛ",
        subTitle: "не валідний імейл",
        strong: "Перевір",
        isAlert: true,
      };
    }

    if (password.length < 6) {
      return {
        variant: "warning",
        title: "ПАРОЛЬ",
        subTitle: "пароль має бути не менше 6-ти символів",
        strong: "Перевір",
        isAlert: true,
      };
    }

    if (name.length === 0) {
      return {
        variant: "warning",
        title: "ІМЯ",
        subTitle: "поле імя не може бути порожнім",
        strong: "Перевір",
        isAlert: true,
      };
    }

    if (role.length === 0) {
      return {
        variant: "warning",
        title: "ГРУПА",
        subTitle: "поле група не може бути порожнім",
        strong: "Перевір",
        isAlert: true,
      };
    }
    return true;
  };
  
  return checkInputs();
};
