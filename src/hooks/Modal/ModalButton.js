import React, {useState} from "react"
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Button from 'react-bootstrap/Button';
import Context from "../../context"

function ModalButton(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        +
      </Button>
      <Context.Consumer>
        {(userID) => (
                <MyVerticallyCenteredModal
                show={modalShow}
                uid={userID}
                modalcontent={props.modalcontent}
                onHide={() => setModalShow(false)}
              />
        )}
      </Context.Consumer>
    </React.Fragment>
  );
}

export default ModalButton
