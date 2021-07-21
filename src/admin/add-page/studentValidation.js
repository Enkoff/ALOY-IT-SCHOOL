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
        title: "не валідний імейл",
        isAlert: true,
      };
    }

    if (password.length < 6) {
      return {
        variant: "warning",
        title: "пароль має бути не менше 6-ти символів",
        isAlert: true,
      };
    }

    if (name.length === 0) {
      return {
        variant: "warning",
        title: "поле імя не може бути порожнім",
        isAlert: true,
      };
    }

    if (role.length === 0) {
      return {
        variant: "warning",
        title: "поле група не може бути порожнім",
        isAlert: true,
      };
    }
    return true;
  };

  return checkInputs();
};
