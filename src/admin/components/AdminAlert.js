import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    bottom: '0'
  },
}));

export default function DescriptionAlerts({variant, title, subTitle, strong}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={variant}>
        <AlertTitle>{title}</AlertTitle>
        {subTitle} — <strong>{strong}!</strong>
      </Alert>
    </div>
  );
}
