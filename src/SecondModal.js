import React from "react";

import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function SecondModal({ data, isClicked, setClicked }) {
  const [plateValue, setPlateValue] = React.useState("");
  let flag = false;
  const onTextFieldChange = (event) => {
    setPlateValue(event.target.value);
  };

  const submitHandler = () => {
    data.forEach((item) => {
      if (item.value == plateValue) flag = true;
    });
    if (flag) alert("Такая машина есть.");
    else alert("Такой машины нет");
    setClicked(false);
  };

  return isClicked ? (
    <div>
      <TextField
        value={plateValue}
        id="outlined-required"
        label="Проверьте номер машины"
        sx={{ width: 0.15 }}
        onChange={onTextFieldChange}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={submitHandler}
      >
        Ок
      </Button>
    </div>
  ) : (
    <></>
  );
}
