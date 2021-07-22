import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { useSelector } from "react-redux";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects({ setGroupName }) {
  const classes = useStyles();
  const [grName, setGrName] = useState("a1");
  const groups = useSelector((state) => state.admin.groups);

  const handleChange = (event) => {
    setGrName(event.target.value);
    setGroupName(event.target.value);
  };

  return (
    <FormControl className={classes.margin}>
      <NativeSelect
        id="demo-customized-select-native"
        value={grName}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {groups !== null &&
          groups.map((group) => <option key={group}>{group}</option>)}
      </NativeSelect>
    </FormControl>
  );
}
