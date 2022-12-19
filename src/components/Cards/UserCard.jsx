import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons'

class UserCard extends React.Component {
    render() {
        return (
            <Col sm={this.props.size ? this.props.size : 6}>
                <Card className={this.props.className}>
                    <CardBody>
                        <Row>
                            <Col sm="auto" style={{ paddingRight: "10px" }}>
                                {this.props.icon}
                            </Col>
                            <Col style={{ paddingLeft: "0px", paddingTop: "10px" }}>
                                <div style={
                                    {
                                        textAlign: "left",
                                        fontWeight: "500",
                                        lineHeight: "16px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }
                                }>
                                    {this.props.user !== undefined && this.props.user.name}
                                </div>
                                <div style={
                                    {
                                        textAlign: "left",
                                        fontWeight: "500",
                                        lineHeight: "16px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }
                                }>
                                    {this.props.user !== undefined && this.props.user.age}
                                </div>
                                {this.props.showButton &&
                                    <>
                                        <hr style={{ margin: "unset" }} />
                                        <div className="text-center">
                                            <Button
                                                onClick={this.props.onClick}
                                                size="sm" color="success"
                                                className="btn-round">
                                                {this.props.btnText}
                                            </Button>
                                        </div>
                                    </>
                                }
                            </Col>
                            <Col sm="auto" className="remove-group">
                                {this.props.removeOption &&
                                    <>
                                        <FontAwesomeIcon onClick={this.props.onClickEdit} icon={faEdit} />
                                        <FontAwesomeIcon onClick={this.props.onClickRemove} icon={faTimesCircle} />
                                    </>

                                }
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export class U1 extends React.Component {
    render() {
        return (<p>aaaaa</p>)
    }
}

export default UserCard;