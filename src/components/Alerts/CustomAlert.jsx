import React from "react";
import { Alert, Button, Col, Row } from "reactstrap";

class CustomAlert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: (this.props.color ? this.props.color : "warning"),
            icon: (this.props.icon ? this.props.icon : ""),
            content: (this.props.content ? this.props.content : "Not Content Found...")
        }
    }


    render() {
        return (
            <Alert color={this.state.color} style={{ padding: "1px 16px 1px 20px", marginBottom: ".5rem" }}>
                <Row>
                    <Col sm="auto">
                        {this.props.icon}
                    </Col>
                    <Col style={{ "background": "white", "color": "black" }}>
                        {this.state.content}
                    </Col>
                    {this.props.closeAction ?
                        <Col sm="auto" style={{ "background": "white", "color": "black" }}>
                            <div style={{ textAlign: "right" }} >
                                <Button
                                    style={{ minWidth: "1.125rem", "width": "1.125rem", "height": "1.125rem", }}
                                    className="btn-round btn-icon"
                                    color="dark"
                                    outline
                                    onClick={this.props.closeAction}
                                    size="sm">
                                    <i className="fa fa-times text-white" aria-hidden="true"></i>
                                </Button>
                            </div>
                        </Col> : ""}
                </Row>
            </Alert>
        );
    }
}

export default CustomAlert;