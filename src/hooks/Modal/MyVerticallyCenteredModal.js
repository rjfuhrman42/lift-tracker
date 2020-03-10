import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function MyVerticallyCenteredModal(props) {

    const {name} = props.modalcontent.data

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <h4>How much weight?</h4>
            <input type="number"></input> 

            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue="lbs">
                 <ToggleButton value="lbs">lbs</ToggleButton>
                 <ToggleButton value="kgs">kgs</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>

          <h4>How many sets?</h4>
          <input type="number"></input>
          <h4>How many reps?</h4>
          <input type="number"></input>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal
  