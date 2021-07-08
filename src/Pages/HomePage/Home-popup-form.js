import React, { useEffect, useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { sendEmail } from "../../mailer-js/mailer";

const Popup = ({ isPressBtn }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (isPressBtn) {
      setOpen(true);
    }
  }, [isPressBtn]);

  const handleClickClouse = () => {
    sendEmail(name, phone);
    setOpen(false);
    setName("");
    setPhone("");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClickClouse}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Заповніть форму і ми вам зателефонуємо!
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Імя"
          type="text"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="phone"
          label="Телефон"
          type="text"
          variant="outlined"
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickClouse} color="secondary">
          Закрити
        </Button>
        <Button onClick={handleClickClouse} color="primary">
          Відправити
        </Button>
      </DialogActions>
     
    </Dialog>
  );
};

export default Popup;
