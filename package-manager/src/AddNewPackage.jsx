import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddNewPackage = (props) => {

    return <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add New Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Container>
                    <Row>
                        <Col><Form.Group className="mb-3" controlId="senderName">
                            <Form.Label>Sender Name:</Form.Label>
                            <Form.Control name="SenderName" onChange={props.handlePackageInputChange} />
                        </Form.Group>
                        </Col>
                        <Col><Form.Group className="mb-3" controlId="reciverName">
                            <Form.Label>Receiver Name:</Form.Label>
                            <Form.Control name="ReciverName" onChange={props.handlePackageInputChange} />
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col><Form.Group className="mb-3" controlId="sourceLocation">
                            <Form.Label>Source Location:</Form.Label>
                            <Form.Control name="SourceLocation" onChange={props.handlePackageInputChange} />
                        </Form.Group></Col>
                        <Col><Form.Group className="mb-3" controlId="sourceLocation">
                            <Form.Label>Destination Location:</Form.Label>
                            <Form.Control name="DestinationLocation" onChange={props.handlePackageInputChange} />
                        </Form.Group></Col>
                    </Row>
                </Container>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={props.handleAddNewPackage}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}

export default AddNewPackage