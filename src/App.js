import { useState } from 'react';

import Modal from './Modal';
import SecondModal from './SecondModal';
import Seats from './Seats';
import AddBtn from './AddBtn';
import CheckBtn from './CheckBtn';

import './App.css';

export default function App() {
  const [data, changeData] = useState([
    { position: 2, value: 'A 007 AA' },
    // { position: 6, value: "C 065 MK" },
  ]);

  const [modal, changeModal] = useState(false);
  const [secondModal, changeSecondModal] = useState(false);

  const onAddButtonCLick = () => {
    changeModal(true);
  };

  const onCheckButtonClick = () => {
    changeSecondModal(true);
  };

  return (
    <>
      <AddBtn onClick={onAddButtonCLick} />
      <CheckBtn onClick={onCheckButtonClick} />

      <Modal
        data={data}
        changeData={changeData}
        isClicked={modal}
        setClicked={changeModal}
      />
      <SecondModal
        data={data}
        isClicked={secondModal}
        setClicked={changeSecondModal}
      />

      <div>
        <Seats data={data} />
      </div>
    </>
  );
}
