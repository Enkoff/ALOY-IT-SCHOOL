import React from "react";
import {
  Table,
  makeStyles,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { average } from "../../../module/avarage";
import Row from "./Row";

const useStyles = makeStyles((theme) => ({
  tableCell: {
    padding: "5px",
    backgroundColor: "rgba(29, 218, 202, 0.08)",
  },
}));

export default function CollapsibleTable({ groupName, users }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} />
            <TableCell className={classes.tableCell}>Фото</TableCell>
            <TableCell className={classes.tableCell} align="center">
              Ім'я
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Рейтинг / Бали
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Уроки / Пропуски
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Видалити студента
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users !== null &&
            users
              .filter((u) => u.role === groupName)
              .sort((a, b) => average(b.reating) - average(a.reating))
              .map((u) => <Row key={u.id} users={u} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
