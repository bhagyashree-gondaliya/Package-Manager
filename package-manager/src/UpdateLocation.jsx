import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpdateLocation = (props) => {
    return <Modal show={props.updateLocationShow} onHide={props.handleLocationClose}>
        <Modal.Header closeButton>
            <Modal.Title>Update Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Container>
                    <Row>

                        <Col><Form.Group className="mb-3" controlId="sourceLocation">
                            <Form.Label> Location:</Form.Label>
                            <Form.Control name="CurrentLocation" onChange={props.handleLocationChange} />
                        </Form.Group></Col>

                    </Row>
                </Container>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleLocationClose}>
                Close
            </Button>
            <Button variant="primary" onClick={props.handleLocationSave}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>

}

export default UpdateLocation