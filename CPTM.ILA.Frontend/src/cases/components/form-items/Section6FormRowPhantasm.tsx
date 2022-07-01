import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section6FormRowPhantasm = () => {
    return (
        <Row className="mb-3">
            <Col lg={1}>
                <p>6.2.1</p>
            </Col>
            <Form.Label as={Col}>Finalidade Poder Público</Form.Label>
            <Col lg={8}>
                <Form.Control
                    disabled
                    readOnly
                    as="textarea"
                    rows={2}
                    type="text"
                    value="Atendimento de finalidade pública, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público."
                />
            </Col>
            <Col lg={1}></Col>
        </Row>
    );
};

export default Section6FormRowPhantasm;
