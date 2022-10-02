import { useState } from "react";

import Modal from "./Modal";
import Seats from "./Seats";
import AddBtn from "./AddBtn";
import CheckBtn from "./CheckBtn";

import "./App.css";

export default function App() {
  const [data, changeData] = useState([
    { position: 2, value: "A 007 AA" },
    { position: 6, value: "A 007 AA" },
  ]);

  const [modal, changeModal] = useState(false);

  const onAddButtonCLick = () => {
    changeModal(true);
  };

  return (
    <>
      <AddBtn onClick={onAddButtonCLick} />
      <CheckBtn />
      <Modal
        data={data}
        changeData={changeData}
        isClicked={modal}
        setClicked={changeModal}
      />
      <div className="grid">
        <Seats data={data} />
      </div>
    </>
  );
}
