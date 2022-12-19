import React from "react";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AvForm, AvField } from "availity-reactstrap-validation";

export default class AddUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false
        }
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    handleValidSubmit = (event, values) => {
        const { payload } = values
        payload.id = this.getRandomInt(100)
        if (typeof this.props.addUser === "function")
            this.props.addUser(payload)

        if (typeof this.props.close === "function")
            this.props.close();
    }

    render() {
        let button
        if (this.state.isProcessing) {
            button = <Button color="success" className="btn-round" disabled>Processing</Button>;
        } else {
            button = <Button color="success" className="btn-round">{this.props.btnText}</Button>
        }
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.close}>
                <AvForm onValidSubmit={this.handleValidSubmit}>
                    <ModalHeader toggle={this.props.close}>
                        Create New User
                    </ModalHeader>
                    <ModalBody style={{ boxShadow: "unset" }} className="card">
                        <Label for="payload.name">Name</Label>
                        <AvField
                            name="payload.name"
                            type="text"
                            validate={{
                                required: { value: true, errorMessage: 'Please enter a name' },
                                pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letter' },
                                minLength: { value: 4, errorMessage: 'Your name must be between 6 and 16 characters' },
                                maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                            }}
                        />
                        <Label for="payload.age">Age</Label>
                        <AvField
                            name="payload.age"
                            type="text"
                            validate={{
                                required: { value: true, errorMessage: 'Please enter a name' },
                                pattern: { value: '^[1-9][0-9]$', errorMessage: 'Your age must be composed only with number' },
                                minLength: { value: 1, errorMessage: 'Your age must be between 1 and 2 numbers' },
                                maxLength: { value: 2, errorMessage: 'Your age must be between 1 and 2 numbers' }
                            }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        {button}{' '}
                        {!this.state.isProcessing &&
                            <Button color="danger" className="btn-round" onClick={this.props.close}>Cancel</Button>
                        }
                    </ModalFooter>
                </AvForm>
            </Modal>
        )
    }
}