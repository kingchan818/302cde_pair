import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';

type CustomModalProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    data?: JSX.Element;
};

const CustomModal: FC<CustomModalProps> = (props) => {
    return (
        <Modal show={props.show} onHide={() => props.setShow(!props.show)} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Total Payable Tax</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.data}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => props.setShow(!props.show)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
