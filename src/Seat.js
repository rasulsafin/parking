import "./Seat.css";
import Box from "@mui/material/Box";

export default function Seat({ isFree = true, position }) {
  let color;
  isFree ? (color = "#26de81") : (color = "red");
  return (
    <Box
      onClick={() => {
        console.log("onClick");
      }}
      sx={{
        width: 100,
        height: 100,
        backgroundColor: color,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
        display: "inline-block",
        margin: 0.2,
      }}
    />
  );
}
