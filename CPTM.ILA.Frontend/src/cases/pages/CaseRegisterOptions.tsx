import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../shared/context/auth-context";

const CaseRegisterOptions = () => {
    const { changeGroup, user } = useContext(AuthContext);
    let navigate = useNavigate();

    const newHandler = () => {
        changeGroup(user.originGroup);
        navigate("./new");
    };

    const continueHandler = () => {
        navigate("../continue");
    };

    const editHandler = () => {
        navigate("../edit/");
    };

    const reprovadosHandler = () => {
        navigate("../reprovados");
    };

    return (
        <React.Fragment>
            <h1>Registrar Processo - Escolha uma opção</h1>
            <CardGroup className="mt-5">
                <Card className="border-0" bg="transparent">
                    <Card.Body className="text-center">
                        <Button
                            variant="info"
                            size="lg"
                            style={{ height: "8rem" }}
                            onClick={newHandler}
                        >
                            NOVO PROCESSO
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="border-0" bg="transparent">
                    <Card.Body className="text-center">
                        <Button
                            variant="success"
                            size="lg"
                            style={{ height: "8rem" }}
                            onClick={continueHandler}
                        >
                            CONTINUAR PROCESSO
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="border-0" bg="transparent">
                    <Card.Body className="text-center">
                        <Button
                            variant="secondary"
                            size="lg"
                            style={{ height: "8rem" }}
                            onClick={editHandler}
                        >
                            ALTERAR PROCESSO EXISTENTE
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="border-0" bg="transparent">
                    <Card.Body className="text-center">
                        <Button
                            variant="danger"
                            size="lg"
                            style={{ height: "8rem" }}
                            onClick={reprovadosHandler}
                        >
                            REVISAR PROCESSOS REPROVADOS
                        </Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </React.Fragment>
    );
};

export default CaseRegisterOptions;
