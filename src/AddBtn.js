import Button from "@mui/material/Button";

export default function AddBtn({ onClick }) {
  const onButtonClick = () => onClick();

  return (
    <Button sx={{ margin: 1 }} variant="contained" onClick={onButtonClick}>
      Добавить
    </Button>
  );
}
