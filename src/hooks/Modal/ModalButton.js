import React, {useState} from "react"
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Button from 'react-bootstrap/Button';

function ModalButton(props) {
  const [modalShow, setModalShow] = useState(false);
  console.log(modalShow)

  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        +
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ModalButton
