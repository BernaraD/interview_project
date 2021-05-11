import React, {useState} from 'react';
import './AddUser.css';
import {Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {logDOM} from '@testing-library/react';


function AddUser(props) {

  const initial = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    organization: '',
    euResident: false,
    advanced: false,
    alerts: false,
    communications: false,
  };

  const [user, setUser] = useState(initial);

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const addUserHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (value === 'false' || value === 'true') {
      setUser({...user, [name]: JSON.parse(value)});
    } else {
      setUser({...user, [name]: value});
    }
    // if (firstName.length > 2) {
    //     props.firstName(firstName, lastName, emailAddress, organization, euResident)
    //     setSuccessModal(true)
    // } else {
    //     setErrorModal(true)
    // }

  };
  const addUserCheckboxHandler = (event) => {
    const checked = event.target.checked;
    const name = event.target.name;
    setUser({...user, [name]: checked});
  };

  return (
    <div className="contain">
      <div className="wrapper">

        <div className="form">
          <h3><b>Sign up for email updates</b></h3>
          <p>*Indicates Required Field</p>

          <form>
            <p>
              <label className="mb-2">FIRST NAME*</label>
              <input type="text" className="form-control"
                     required
                     name="firstName"
                     onChange={addUserHandler}
                     value={user.firstName}
              />
            </p>

            <p>
              <label className="mb-2">LAST NAME*</label>
              <input type="text" className="form-control"
                     required
                     name="lastName"
                     onChange={addUserHandler}
                     value={user.lastName}
              />
            </p>

            <p>
              <label className="mb-2">EMAIL ADDRESS*</label>
              <input type="email" className="form-control"
                     required
                     name="emailAddress"
                     onChange={addUserHandler}
                     value={user.emailAddress}

              />
            </p>
            <p>
              <label className="mb-2">ORGANIZATION</label>
              <input type="text" className="form-control"
                     name="organization"
                     value={user.organization}
                     onChange={addUserHandler}
              />
            </p>

            <p>
              <label className="mb-2">EU RESIDENT*</label>
              <select className="form-select"
                      onChange={addUserHandler}
                      name="euResident"
              >
                <option selected disabled={true}>Please choose</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </p>
            <br/>

            <p>
              <div className="form-check">
                <input className="form-check-input checkbox"
                       onChange={addUserCheckboxHandler}
                       name="advanced"
                       type="checkbox"
                />
                <label className="form-check-label ml-2">
                  ADVANCED
                </label>
              </div>
            </p>

            <p>
              <div className="form-check">
                <input className="form-check-input checkbox"
                       type="checkbox"
                       onChange={addUserCheckboxHandler}
                       name="alerts"
                />
                <label className="form-check-label ml-2">
                  ALERTS
                </label>
              </div>
            </p>

            <p>
              <div className="form-check">
                <input
                  className="form-check-input checkbox"
                  type="checkbox"
                  onChange={addUserCheckboxHandler}
                  name='communications'
                />
                <label className="form-check-label ml-2">
                  OTHER COMMUNICATIONS
                </label>
              </div>
            </p>

            <br/>


            <div>
              <button className="submit-btn">SUBMIT</button>
              <button className="reset_btn">RESET</button>
            </div>


            <Modal isOpen={successModal}>
              <ModalHeader>{user.firstName} {user.lastName} signed up for email update</ModalHeader>
              <ModalBody>
                {user.emailAddress},
                {user.organization}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => setSuccessModal(false)}>OK</Button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={errorModal}>
              <ModalHeader>An error occurred while submitting your request, please try
                again </ModalHeader>

              <ModalFooter>
                <Button color="primary" onClick={() => setErrorModal(false)}>OK</Button>
              </ModalFooter>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  addUserHandler: (user) => dispatch({type: 'POST_NEW_USER', payload: user}),
});

export default connect(mapDispatchToProps)(AddUser);