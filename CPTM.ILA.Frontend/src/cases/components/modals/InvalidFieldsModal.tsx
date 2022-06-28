import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InvalidFieldsModal = (props: {
    onHideInvalidFieldsModal: () => void;
    showInvalidFieldsModal: boolean;
}) => {
    return (
        <Modal
            show={props.showInvalidFieldsModal}
            onHide={props.onHideInvalidFieldsModal}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{"Campos Inválidos"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {"Existem campos obrigatórios não preenchidos"}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={props.onHideInvalidFieldsModal}
                >
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InvalidFieldsModal;
