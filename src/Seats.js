import Seat from "./Seat";

export default function Seats({ data }) {
  let content = [];
  for (let i = 0; i < 9; i++) {
    if (data[i]) content[data[i].position] = <Seat isFree={false} />;
  }

  for (let i = 0; i < 9; i++) {
    if (!content[i]) content[i] = <Seat />;
  }

  return content;
}

{
  /* <div>
      <Seat position="1" />
      <Seat position="2" />
      <Seat position="3" />
      <br />
      <Seat position="4" />
      <Seat position="5" />
      <Seat position="6" />
      <br />
      <Seat position="7" />
      <Seat position="8" />
      <Seat position="9" />
    </div> */
}
