import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../../shared/context/auth-context";
import { useCountdown } from "../../../shared/hooks/timer-hook";

const SaveProgressModal = (props: {
    onSaveProgressSubmit: () => void;
    onHideSaveProgressModal: () => void;
    onDismissSaveProgressModal: () => void;
    showSaveProgressModal: boolean;
    children?: React.ReactNode;
    showChildrenContent: boolean;
    isLoading: boolean;
    hasError: boolean;
}) => {
    const { tokenExpirationDate } = useContext(AuthContext);
    const { minutes } = useCountdown(tokenExpirationDate);

    return (
        <Modal
            show={props.showSaveProgressModal}
            onHide={props.onHideSaveProgressModal}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {!props.showChildrenContent
                        ? "Salvar Progresso!"
                        : "Salvando Progresso..."}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!props.showChildrenContent &&
                    minutes >= 10 &&
                    "Você tem certeza que deseja salvar o seu progresso?"}
                {!props.showChildrenContent &&
                    minutes < 10 &&
                    "Sua sessão está espirando! Salve o seu progresso agora!"}
                {props.showChildrenContent && props.children}
            </Modal.Body>
            <Modal.Footer>
                {!props.showChildrenContent && (
                    <React.Fragment>
                        <Button
                            variant="danger"
                            onClick={props.onHideSaveProgressModal}
                        >
                            Não
                        </Button>
                        <Button
                            variant="primary"
                            onClick={props.onSaveProgressSubmit}
                        >
                            Sim
                        </Button>
                    </React.Fragment>
                )}
                {props.showChildrenContent && !props.hasError && (
                    <React.Fragment>
                        <Button
                            variant="primary"
                            onClick={props.onDismissSaveProgressModal}
                            disabled={props.isLoading}
                        >
                            OK
                        </Button>
                    </React.Fragment>
                )}
                {props.showChildrenContent && props.hasError && (
                    <React.Fragment>
                        <Button
                            variant="danger"
                            onClick={props.onHideSaveProgressModal}
                            disabled={props.isLoading}
                        >
                            Voltar
                        </Button>
                    </React.Fragment>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default SaveProgressModal;
