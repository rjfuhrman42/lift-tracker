import React, {useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

import firebase from "firebase"

function MyVerticallyCenteredModal(props) {

  var [measurement, setMeasurement] = useState('lbs');

  function handleClick() {
    props.onHide()

    let entry = {
      'measurement': measurement                                  // set the measurement based on the state (kilograms vs pounds)
    }

    let today = document.querySelector('input[name=date]').value

    if(props.rest === 'true') {        
      entry = {'restDay': true}                                                             // its a Rest day
    }
    else {
      let inputs = document.querySelectorAll('.entry')                                      // grab all the inputs
      
      entry['exercise'] = props.modalcontent.data.name;                                     // set the name of the exercise
      inputs.forEach(input => entry[input.name] = input.value)                              // set the values of the inputs
    }

    var todayRef = firebase.database().ref(`/users/${props.uid}/logs/${today}`).push();     // allows us to add multiple exercise entries
    todayRef.set(entry)                                                                     // log the entry into the firebase db
  }

  function handleChange(e) {
    setMeasurement(e)
  }
  if(props.rest === 'true' && !props.modalcontent) {
    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rest Day
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <h4>When?</h4>
          <input type="date"
                name="date" 
                >
          </input>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Save</Button>
      </Modal.Footer>
    </Modal>
    )
  }
  else return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.modalcontent.data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

            <h4>How much weight?</h4>
            <input type="number" 
                  name="weight" 
                  className="entry"
                   >
            </input> 

            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue={measurement} onChange={handleChange}> 
                 <ToggleButton value="lbs">lbs</ToggleButton>
                 <ToggleButton value="kgs">kgs</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>

          <h4>How many sets?</h4>
          <input type="number" 
                 name="sets" 
                 className="entry"
                 >
          </input>

          <h4>How many reps?</h4>
          <input type="number" 
                 name="reps" 
                 className="entry"
                 >
          </input>

          <h4>When?</h4>
          <input type="date"
                 name="date" 
                 >
          </input>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
}

  export default MyVerticallyCenteredModal
  