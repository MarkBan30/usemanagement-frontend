import React from "react";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import CustomAlert from "components/Alerts/CustomAlert";

export default class DeleteResourceModal extends React.Component {

    handleDelete = () => {
        if (typeof this.props.handleDelete === "function")
            this.props.handleDelete();
        if (typeof this.props.close === "function")
            this.props.close();
    }

    render() {
        let alertIcon = <div style={{ fontSize: "25px", paddingTop: "60%", paddingBottom: "100%" }}>
            <i className="fa fa-info-circle fa-6" aria-hidden="true"></i>
        </div>
        let alertContent = <div style={{ marginTop: "25px" }}>
            <p>Are you sure you want to delete resouce: <strong>{this.props.resource}</strong></p>
        </div>
        return (
            <Modal style={{ maxWidth: "70%" }} isOpen={this.props.isOpen} toggle={this.props.close}>
                <AvForm onValidSubmit={this.handleDelete}>
                    <ModalHeader toggle={this.props.close}>
                        {`Delete Resource: ${this.props.resource}`}
                    </ModalHeader>
                    <ModalBody style={{ boxShadow: "unset" }} className="card">
                        <CustomAlert icon={alertIcon} content={alertContent} color="danger" />
                        <Label>Type {<strong>{this.props.resource}</strong>} to confirm</Label>
                        <AvField name="name" type="text" errorMessage="Resource Name Mismatch" validate={{
                            required: { value: true },
                            pattern: { value: this.props.resource },
                        }} />
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ marginRight: "5px" }} color="success" className="btn-round">Delete Resource</Button>
                        <Button color="danger" className="btn-round" onClick={this.props.close}>Cancel</Button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        )
    }
}