import ModalContent from "./ModalContent";

export default function Modal({ data, changeData, isClicked, setClicked }) {
  let content;
  if (isClicked)
    content = (
      <ModalContent
        data={data}
        changeData={changeData}
        setClicked={setClicked}
      />
    );

  return content;
}
