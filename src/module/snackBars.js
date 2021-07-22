export const snackBars = (title, variant) => {
  enqueueSnackbar(`${title}`, { variant });
};
