import React, {useState} from 'react';
import "./AddUser.css"
import {Modal, ModalBody, ModalFooter, ModalHeader, Button} from "reactstrap";
import {connect} from "react-redux";


function AddUser(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [organization, setOrganization] = useState('');
    const [euResident, setEuResident] = useState(false);

    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (firstName.length > 2) {
            props.firstName(firstName, lastName, emailAddress, organization, euResident)
            setSuccessModal(true)
        } else {
            setErrorModal(true)
        }

    }

    const onsubmitClick = () => {

    }

    const userFirstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const userLastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const userEmailHandler = (e) => {
        setEmailAddress(e.target.value)
    }

    const userOrganizationHandler = (e) => {
        setOrganization(e.target.value)
    }


    return (
        <div className="contain">
            <div className="wrapper">

                <div className="form">
                    <h3><b>Sign up for email updates</b></h3>
                    <p>*Indicates Required Field</p>

                    <form onSubmit={addUserHandler}>
                        <p>
                            <label className="mb-2">FIRST NAME*</label>
                            <input type="text" className="form-control"
                                   required
                                   onChange={userFirstNameHandler}
                                   value={firstName}
                            />
                        </p>

                        <p>
                            <label className="mb-2">LAST NAME*</label>
                            <input type="text" className="form-control"
                                   required
                                   onChange={userLastNameHandler}
                                   value={lastName}
                            />
                        </p>

                        <p>
                            <label className="mb-2">EMAIL ADDRESS*</label>
                            <input type="email" className="form-control"
                                   required
                                   onChange={userEmailHandler}
                                   value={emailAddress}

                            />
                        </p>
                        <p>
                            <label className="mb-2">ORGANIZATION</label>
                            <input type="text" className="form-control"
                                   value={organization}
                                   onChange={userOrganizationHandler}
                            />
                        </p>

                        <p>
                            <label className="mb-2">EU RESIDENT*</label>
                            <select className="form-select" onChange={() => setEuResident(true)}>
                                <option selected disabled={true}>Please choose</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </p>
                        <br/>

                        <p>
                            <div className="form-check">
                                <input className="form-check-input checkbox" type="checkbox" value=""/>
                                <label className="form-check-label ml-2">
                                    ADVANCED
                                </label>
                            </div>
                        </p>

                        <p>
                            <div className="form-check">
                                <input className="form-check-input checkbox" type="checkbox" value=""/>
                                <label className="form-check-label ml-2">
                                    ALERTS
                                </label>
                            </div>
                        </p>

                        <p>
                            <div className="form-check">
                                <input className="form-check-input checkbox" type="checkbox" value=""/>
                                <label className="form-check-label ml-2">
                                    OTHER COMMUNICATIONS
                                </label>
                            </div>
                        </p>

                        <br/>


                        <div>
                            <button className="submit-btn" onClick={onsubmitClick}>SUBMIT</button>
                            <button className="reset_btn">RESET</button>
                        </div>


                        <Modal isOpen={successModal}>
                            <ModalHeader>{firstName} {lastName} signed up for email update</ModalHeader>
                            <ModalBody>
                                {emailAddress},
                                {organization}
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
    )
}


const mapDispatchToProps = (dispatch) => ({
    addUserHandler: (user) => dispatch({type: 'POST_NEW_USER', payload: user}),
});

export default connect(mapDispatchToProps)(AddUser);