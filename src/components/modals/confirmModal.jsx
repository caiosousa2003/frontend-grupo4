import {
    ModalStyle,
    ModalBtn,
    GlobalDiv,
    ModalTlt,
    Text,
  } from "./styleConfirmModal";
  
  export default function modal({ isModalOpen, cancel, confirmDelete, item }) {

    return (
      <>
        <ModalStyle
          open={isModalOpen}
          onCancel={cancel}
          footer={null}
        >
          <GlobalDiv>
            <ModalTlt>Excluir {item}</ModalTlt>
            <Text>Tem certeza que você deseja excluir esse {item}?</Text>
            <ModalBtn onClick={confirmDelete}>EXCLUIR</ModalBtn>
          </GlobalDiv>
        </ModalStyle>
      </>
    );
  }