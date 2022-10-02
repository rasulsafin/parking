import Button from "@mui/material/Button";

export default function CheckBtn({ onClick }) {
  return (
    <Button sx={{ margin: 1 }} variant="contained" onClick={() => onClick()}>
      Проверить
    </Button>
  );
}
