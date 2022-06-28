import React, { useEffect, useState } from "react";
import {
    FieldArrayPath,
    FieldPath,
    useFieldArray,
    UseFormReturn,
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { Case } from "../../../shared/models/cases.model";
import {
    emptyItemCategoriaDadosPessoais,
    itemCategoriaDadosPessoais,
} from "../../../shared/models/case-helpers/case-helpers.model";
import CreateCommentBox from "../../../threads-comments/components/CreateCommentBox";
import Section7FormRowSub from "./Section7FormRowSub";
import { AiFillQuestionCircle } from "react-icons/ai";

const Section7FormRow = (props: {
    tooltip?: JSX.Element;
    disabled: boolean;
    name: FieldPath<Case>;
    className: string;
    itemRef: { number: string; title: string };
    systems: string[];
    methods: UseFormReturn<Case>;
    radioCheckedHandler: (radioChackedName: string) => void;
    isNew: boolean;
}) => {
    const { fields, append, remove } = useFieldArray({
        control: props.methods.control, // control props comes from useForm
        name: props.name as FieldArrayPath<Case>, // unique name for your Field Array
    });

    const [trata, setTrata] = useState("INVALID");

    useEffect(() => {
        if (fields && fields.length > 0) {
            setTrata("SIM");
        } else if (props.isNew) {
            setTrata("INVALID");
        } else {
            setTrata("NÃO");
        }
        return () => {};
    }, [fields, props.isNew, props.name]);

    const handleTrataRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTrata(event.currentTarget.value);
        if (event.currentTarget.value !== "INVALID") {
            props.radioCheckedHandler(props.name);
        }
        if (event.currentTarget.value === "NÃO") {
            props.methods.setValue(props.name, []);
        }
        if (event.currentTarget.value === "SIM") {
            append(emptyItemCategoriaDadosPessoais());
        }
    };

    return (
        <React.Fragment>
            <Row className={props.className}>
                <Col lg={1}>
                    <p>{props.itemRef.number}</p>
                </Col>
                {props.tooltip ? (
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip className="text-muted">
                                {props.tooltip}
                            </Tooltip>
                        }
                    >
                        <Form.Label as={Col}>
                            {props.itemRef.title}{" "}
                            {props.itemRef.number === "7.1.1" ||
                            props.itemRef.number === "7.1.2" ||
                            props.itemRef.number === "7.1.3" ||
                            props.itemRef.number === "7.1.4" ? (
                                <AiFillQuestionCircle />
                            ) : (
                                ""
                            )}
                        </Form.Label>
                    </OverlayTrigger>
                ) : (
                    <Form.Label as={Col}>{props.itemRef.title}</Form.Label>
                )}
                <Col className="d-grid justify-content-center">
                    <Form.Check
                        type="radio"
                        name={`trata-${props.itemRef.number}`}
                        required
                        label="Sim"
                        value="SIM"
                        checked={trata === "SIM"}
                        disabled={props.disabled}
                        onChange={handleTrataRadio}
                        isInvalid={trata === "INVALID"}
                    />
                    <Form.Check
                        type="radio"
                        name={`trata-${props.itemRef.number}`}
                        required
                        inline
                        label="Não"
                        value="NÃO"
                        checked={trata === "NÃO"}
                        disabled={props.disabled}
                        onChange={handleTrataRadio}
                        isInvalid={trata === "INVALID"}
                    />
                    <Form.Check
                        type="radio"
                        name={`trata-${props.itemRef.number}`}
                        required
                        inline
                        value="INVALID"
                        checked={trata === "INVALID"}
                        disabled={props.disabled}
                        onChange={handleTrataRadio}
                        style={{ display: "none" }}
                    />
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col lg={2}></Col>
                <Col lg={1}>
                    <Row>
                        <CreateCommentBox item={props.itemRef} />
                    </Row>
                </Col>
            </Row>
            <React.Fragment>
                {fields && fields.length > 0 ? (
                    fields.map((field, index) => (
                        <React.Fragment key={field.id}>
                            <Section7FormRowSub
                                systems={props.systems}
                                className={props.className}
                                name={
                                    `${props.name}[${index}]` as FieldPath<Case>
                                }
                                disabled={props.disabled}
                                methods={props.methods}
                            />
                            <Row className="justify-content-center">
                                <ButtonGroup
                                    as={Col}
                                    className="mt-1 mb-3"
                                    lg={2}
                                >
                                    <Button
                                        variant="primary"
                                        disabled={props.disabled}
                                        onClick={() =>
                                            append(
                                                emptyItemCategoriaDadosPessoais()
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                    <Button
                                        variant="danger"
                                        disabled={props.disabled}
                                        onClick={() => remove(index)}
                                    >
                                        -
                                    </Button>
                                </ButtonGroup>
                            </Row>
                        </React.Fragment>
                    ))
                ) : (
                    <Row className="justify-content-center">
                        <ButtonGroup as={Col} className="mt-1 mb-3" lg={2}>
                            <Button
                                variant="primary"
                                disabled={!(trata === "SIM")}
                                onClick={() =>
                                    append(emptyItemCategoriaDadosPessoais())
                                }
                            >
                                +
                            </Button>
                        </ButtonGroup>
                    </Row>
                )}
            </React.Fragment>
        </React.Fragment>
    );
};

export default Section7FormRow;
