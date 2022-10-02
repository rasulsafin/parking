import React from "react";

import { TextField, Input, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ModalContent({ data, changeData, setClicked }) {
  const [position, setPosition] = React.useState(0);
  const [plateValue, setPlateValue] = React.useState("");

  const makeArr = (...data) => data;

  const onTextFieldChange = (event) => {
    setPlateValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setPosition(event.target.value === "" ? "" : Number(event.target.value));
  };

  const submitHandler = () => {
    makeArr(data);
    const obj = {
      position: position,
      value: plateValue,
    };
    data.push(obj);
    changeData(data);
    setClicked(false);
  };

  return (
    <div>
      <TextField
        value={plateValue}
        id="outlined-required"
        label="Введите номер машины"
        sx={{ width: 0.15 }}
        onChange={onTextFieldChange}
      />
      <Input
        sx={{ paddingTop: 2, margin: 1, width: 0.04 }}
        value={position}
        // size="small"
        onChange={handleInputChange}
        // onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 9,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={submitHandler}
      >
        Подтвердить
      </Button>
    </div>
  );
}
