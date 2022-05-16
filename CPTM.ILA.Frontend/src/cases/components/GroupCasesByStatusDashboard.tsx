import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import { StatusTotals } from "../../shared/models/DTOs/status-totals.model";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

const GroupCasesByStatusDashboard = () => {
  const [concluidos, setConcluidos] = useState(0);
  const [emPreenchimento, setEmPreenchimento] = useState(0);
  const [pendenteAprovacao, setPendenteAprovacao] = useState(0);

  const { token, currentGroup } = useContext(AuthContext);

  const { isLoading, error, isWarning, sendRequest, clearError } =
    useHttpClient();

  useEffect(() => {
    const getGroupCaseTotals = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_CONNSTR}/cases/group/${currentGroup.id}/status/totals`,
          undefined,
          undefined,
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          }
        );

        console.log(responseData.totals);

        const loadedTotals: StatusTotals[] = responseData.totals;
        loadedTotals.sort((a, b) => (a.nome > b.nome ? 1 : -1));

        if (loadedTotals.length !== 0) {
          loadedTotals.map((lt) => {
            if (lt.nome === "Concluído") {
              setConcluidos(lt.quantidadeByStatus);
            }
            if (lt.nome === "Em Preenchimento") {
              setEmPreenchimento(lt.quantidadeByStatus);
            }
            if (lt.nome === "Pendente Aprovação") {
              setPendenteAprovacao(lt.quantidadeByStatus);
            }
            return lt;
          });
        }
      } catch (e) {
        console.log(e);
      }
    };

    getGroupCaseTotals().catch((error) => {
      console.log(error);
    });

    return () => {
      setConcluidos(0);
      setEmPreenchimento(0);
      setPendenteAprovacao(0);
    };
  }, [sendRequest, token, currentGroup.id]);

  if (isLoading) {
    return (
      <Row className="justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    );
  }

  return (
    <React.Fragment>
      {error && (
        <Alert
          variant={isWarning ? "warning" : "danger"}
          onClose={clearError}
          dismissible
        >
          {error}
        </Alert>
      )}
      <Row>
        <h3 className="mb-4">Quantitativo dos Processos</h3>
      </Row>
      <Row>
        <CardGroup>
          <Card border="danger">
            <Card.Header>Pendente Aprovação</Card.Header>
            <Card.Body>
              <h1 className="text-center">
                <Badge bg="danger">{pendenteAprovacao}</Badge>
              </h1>
            </Card.Body>
          </Card>
          <Card border="secondary">
            <Card.Header>Concluídos</Card.Header>
            <Card.Body>
              <h1 className="text-center">
                <Badge bg="secondary">{concluidos}</Badge>
              </h1>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Header>Em Preenchimento</Card.Header>
            <Card.Body>
              <h1 className="text-center">
                <Badge bg="warning">{emPreenchimento}</Badge>
              </h1>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row>
        <Button
          variant="success"
          className="mt-4 mx-auto"
          style={{ width: "8rem", height: "2.5rem" }}
          href="https://www.cptm.sp.gov.br/LGPD/Paginas/Perguntas-e-Respostas.aspx"
          target="blank"
        >
          Ajuda
        </Button>
      </Row>
    </React.Fragment>
  );
};

export default GroupCasesByStatusDashboard;