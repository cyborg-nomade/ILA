import React from "react";
import {
    FieldArrayPath,
    FieldPath,
    useFieldArray,
    UseFormReturn,
    Controller,
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { Case } from "../../../shared/models/cases.model";
import { emptyAgenteTratamento } from "../../../shared/models/case-helpers/case-helpers.model";
import { AiFillQuestionCircle } from "react-icons/ai";
import { statusRadios } from "../../../shared/models/case-helpers/enums.model";
import Section2ForRowSub from "./Section2ForRowSub";

const Section2FormRow = (props: {
    tooltip?: JSX.Element;
    disabled: boolean;
    className: string;
    itemRef: { number: string; title: string };
    methods: UseFormReturn<Case>;
}) => {
    const { fields, append, remove } = useFieldArray({
        control: props.methods.control, // control props comes from useForm
        name: "operadores" as FieldArrayPath<Case>, // unique name for your Field Array
    });

    const handleTrataRadio = (status: statusRadios) => {
        if (status === statusRadios.NÃO) {
            props.methods.setValue("operadores", []);
            props.methods.setValue("fasesCicloTratamento.coleta", false);
            props.methods.setValue("fasesCicloTratamento.retencao", false);
            props.methods.setValue("fasesCicloTratamento.processamento", false);
            props.methods.setValue(
                "fasesCicloTratamento.compartilhamento",
                false
            );
            props.methods.setValue("fasesCicloTratamento.eliminacao", false);
        }
        if (status === statusRadios.SIM) {
            append(emptyAgenteTratamento());
        }
    };

    return (
        <React.Fragment>
            <Row className={props.className}>
                <Col lg={1}>
                    <p>{props.itemRef.number}</p>
                </Col>
                <Col className="d-flex justify-content-between">
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
                                {props.itemRef.title} <AiFillQuestionCircle />
                            </Form.Label>
                        </OverlayTrigger>
                    ) : (
                        <Form.Label as={Col}>{props.itemRef.title}</Form.Label>
                    )}
                    <Col className="d-grid justify-content-center">
                        <Controller
                            rules={{
                                validate: {
                                    required: (value) => {
                                        if (value === statusRadios.INVALID)
                                            return false;
                                        return true;
                                    },
                                },
                            }}
                            control={props.methods.control}
                            name={
                                `radiosClicked.hasOperador` as FieldPath<Case>
                            }
                            render={({
                                field: { onChange, onBlur, value, ref },
                            }) => (
                                <React.Fragment>
                                    <Form.Check
                                        type="radio"
                                        name={`radiosClicked.hasOperador`}
                                        label="Sim"
                                        value={statusRadios.SIM}
                                        checked={
                                            (value as statusRadios) ===
                                            statusRadios.SIM
                                        }
                                        disabled={props.disabled}
                                        onChange={(val: {
                                            target: { value: string };
                                        }) => {
                                            if (val.target.value === "2") {
                                                handleTrataRadio(
                                                    statusRadios.SIM
                                                );
                                                onChange(statusRadios.SIM);
                                            }
                                        }}
                                        isInvalid={
                                            value === statusRadios.INVALID
                                        }
                                        onBlur={onBlur}
                                        ref={ref}
                                    />
                                    <Form.Check
                                        type="radio"
                                        name={`radiosClicked.hasOperador`}
                                        label="Não"
                                        value={statusRadios.NÃO}
                                        checked={
                                            (value as statusRadios) ===
                                            statusRadios.NÃO
                                        }
                                        disabled={props.disabled}
                                        onChange={(val: {
                                            target: { value: string };
                                        }) => {
                                            if (val.target.value === "1") {
                                                handleTrataRadio(
                                                    statusRadios.NÃO
                                                );
                                                onChange(statusRadios.NÃO);
                                            }
                                        }}
                                        isInvalid={
                                            value === statusRadios.INVALID
                                        }
                                        onBlur={onBlur}
                                        ref={ref}
                                    />
                                </React.Fragment>
                            )}
                        />
                    </Col>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <React.Fragment>
                {fields && fields.length > 0 ? (
                    fields.map((field, index) => (
                        <React.Fragment key={field.id}>
                            <Section2ForRowSub
                                name={`operadores[${index}]` as FieldPath<Case>}
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
                                        disabled={
                                            !(
                                                props.methods.watch(
                                                    `radiosClicked.hasOperador` as FieldPath<Case>
                                                ) === statusRadios.SIM
                                            ) || props.disabled
                                        }
                                        onClick={() =>
                                            append(emptyAgenteTratamento())
                                        }
                                    >
                                        +
                                    </Button>
                                    <Button
                                        variant="danger"
                                        disabled={
                                            !(
                                                props.methods.watch(
                                                    `radiosClicked.hasOperador` as FieldPath<Case>
                                                ) === statusRadios.SIM
                                            ) || props.disabled
                                        }
                                        onClick={() => {
                                            remove(index);
                                            if (fields.length - 1 < 1) {
                                                props.methods.setValue(
                                                    `radiosClicked.hasOperador` as FieldPath<Case>,
                                                    statusRadios.INVALID
                                                );
                                            }
                                        }}
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
                                disabled={
                                    !(
                                        props.methods.watch(
                                            `radiosClicked.hasOperador` as FieldPath<Case>
                                        ) === statusRadios.SIM
                                    )
                                }
                                onClick={() => append(emptyAgenteTratamento())}
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

export default Section2FormRow;
