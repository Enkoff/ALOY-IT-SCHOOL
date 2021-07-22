export const addStudentValidation = (email, password, name, role) => {
  const validateEmail = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  };

  const validGroupName = (g) => {
    const re = /^[a-zA-Z0-9]*$/;
    return re.test(String(g).toLowerCase());
  };

  const checkInputs = () => {
    if (!validateEmail(email)) {
      return {
        variant: "warning",
        title: "не коректна Пошта",
        isAlert: true,
      };
    }

    if (password.length < 6) {
      return {
        variant: "warning",
        title: "Пароль має бути не менше 6-ти символів",
        isAlert: true,
      };
    }

    if (name.length === 0) {
      return {
        variant: "warning",
        title: "поле Ім'я не може бути порожнім",
        isAlert: true,
      };
    }

    if (role.length === 0) {
      return {
        variant: "warning",
        title: "поле Група не може бути порожнім",
        isAlert: true,
      };
    }
    if (!validGroupName(role)) {
      return {
        variant: "warning",
        title: "Ім'я групи повинно бути на англійській мові приклад: a1",
        isAlert: true,
      };
    }
    return true;
  };

  return checkInputs();
};
