import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { average } from "../../../module/avarage";

import Row from "./Row";

export default function CollapsibleTable({ groupName, users }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Фото</TableCell>
            <TableCell align="center">Імя</TableCell>
            <TableCell align="center">Рейтинг</TableCell>
            <TableCell align="center">Загальна кількість балів</TableCell>
            <TableCell align="center">Видалити студента</TableCell>
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
