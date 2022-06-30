import React, { useEffect, useState } from "react";
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
import {
    emptyItemCategoriaDadosPessoais,
    itemCategoriaDadosPessoais,
} from "../../../shared/models/case-helpers/case-helpers.model";
import CreateCommentBox from "../../../threads-comments/components/CreateCommentBox";
import Section7FormRowSub from "./Section7FormRowSub";
import { AiFillQuestionCircle } from "react-icons/ai";
import { statusRadios } from "../../../shared/models/case-helpers/enums.model";

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

    const handleTrataRadio = (status: statusRadios) => {
        if (status === statusRadios.NÃO) {
            props.methods.setValue(props.name, []);
        }
        if (status === statusRadios.SIM) {
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
                            `radiosClicked.${props.name
                                .split(".")
                                .join("")}` as FieldPath<Case>
                        }
                        render={({
                            field: { onChange, onBlur, value, ref },
                        }) => (
                            <React.Fragment>
                                <Form.Check
                                    type="radio"
                                    name={`radiosClicked.${props.name}-${props.itemRef.number}`}
                                    label="Sim"
                                    value={statusRadios.SIM}
                                    checked={
                                        (value as statusRadios) ===
                                        statusRadios.SIM
                                    }
                                    disabled={props.disabled}
                                    onChange={(val) => {
                                        if (val.target.value === "2") {
                                            handleTrataRadio(statusRadios.SIM);
                                            onChange(statusRadios.SIM);
                                        }
                                    }}
                                    isInvalid={value === statusRadios.INVALID}
                                    onBlur={onBlur}
                                    ref={ref}
                                />
                                <Form.Check
                                    type="radio"
                                    name={`radiosClicked.${props.name}-${props.itemRef.number}`}
                                    label="Não"
                                    value={statusRadios.NÃO}
                                    checked={
                                        (value as statusRadios) ===
                                        statusRadios.NÃO
                                    }
                                    disabled={props.disabled}
                                    onChange={(val) => {
                                        if (val.target.value === "1") {
                                            handleTrataRadio(statusRadios.NÃO);
                                            onChange(statusRadios.NÃO);
                                        }
                                    }}
                                    isInvalid={value === statusRadios.INVALID}
                                    onBlur={onBlur}
                                    ref={ref}
                                />
                            </React.Fragment>
                        )}
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
                                        onClick={() => {
                                            remove(index);
                                            if (fields.length - 1 < 1) {
                                                console.log("hi");

                                                props.methods.setValue(
                                                    `radiosClicked.${props.name}` as FieldPath<Case>,
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
                                            `radiosClicked.${props.name}` as FieldPath<Case>
                                        ) === statusRadios.SIM
                                    )
                                }
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
