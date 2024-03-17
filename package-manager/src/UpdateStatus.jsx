import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const UpdateStatus = (props) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (e, eventKey) => {
        e.preventDefualt()
        setSelectedValue(eventKey);
    };

    return <Modal show={props.updateStatusShow} onHide={props.handleStatusClose}>
        <Modal.Header closeButton>
            <Modal.Title>Update Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Container>
                    <Row>
                        <Col><Form.Group className="mb-3" controlId="senderName">
                            <Form.Label>Status:</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Shipped
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="In-Transit">In-Transit</Dropdown.Item>
                                    <Dropdown.Item href="Cancelled">Cancelled</Dropdown.Item>
                                    <Dropdown.Item href="Delivered">Delivered</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                        </Col>
                        <Col><Form.Group className="mb-3" controlId="sourceLocation">
                            <Form.Label> Location:</Form.Label>
                            <Form.Control />
                        </Form.Group></Col>

                    </Row>
                </Container>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleStatusClose}>
                Close
            </Button>
            <Button variant="primary" onClick={props.handleStatusClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}
export default UpdateStatus;
