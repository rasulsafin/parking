import Seat from './Seat';
import './Seats.css';

export default function Seats({ data }) {
  let content1 = [];
  let content2 = [];
  let content3 = [];

  for (let i = 0; i < 3; i++) {
    if (data[i]) content1[data[i].position] = <Seat isFree={false} />;
  }

  for (let i = 0; i < 3; i++) {
    if (!content1[i]) content1[i] = <Seat />;
  }

  for (let i = 3; i < 6; i++) {
    if (data[i]) content2[data[i].position - 3] = <Seat isFree={false} />;
  }

  for (let i = 3; i < 6; i++) {
    if (!content2[i - 3]) content2[i - 3] = <Seat />;
  }

  for (let i = 6; i < 9; i++) {
    if (data[i]) content3[data[i].position - 6] = <Seat isFree={false} />;
  }

  for (let i = 6; i < 9; i++) {
    if (!content3[i - 6]) content3[i] = <Seat />;
  }

  const res = [
    ...content1,
    <div className="enter">← Вход</div>,
    <br></br>,

    ...content2,
    <br></br>,
    ...content3,
    <div className="exit">→ Выход</div>,
  ];
  // console.log(res);
  console.log(content1);
  console.log(content2);
  console.log(content3);
  return res;
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
