import React, { useState, useEffect } from "react";
import {
    useFieldArray,
    UseFormReturn,
    Controller,
    FieldPath,
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { Case } from "../../../shared/models/cases.model";
import {
    emptyItemCompatilhamentoDados,
    itemCompartilhamentoDados,
} from "../../../shared/models/case-helpers/case-helpers.model";
import { CaseIndexDictionary } from "../../../shared/models/case-index.dictionary";
import CreateCommentBox from "../../../threads-comments/components/CreateCommentBox";
import NewSection11FormRowSub from "./Section11FormRowSub";
import { statusRadios } from "../../../shared/models/case-helpers/enums.model";

const Section11FormRow = (props: {
    disabled: boolean;
    methods: UseFormReturn<Case>;
}) => {
    const { fields, append, remove } = useFieldArray({
        control: props.methods.control, // control props comes from useForm
        name: "compartilhamentoDadosPessoais" as const, // unique name for your Field Array
    });

    const handleTrataRadio = (status: statusRadios) => {
        if (status === statusRadios.NÃO) {
            props.methods.setValue("compartilhamentoDadosPessoais", []);
        }
        if (status === statusRadios.SIM) {
            append(emptyItemCompatilhamentoDados());
        }
    };

    return (
        <React.Fragment>
            <Row>
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
                            `radiosClicked.compartilhamentoDadosPessoais` as FieldPath<Case>
                        }
                        render={({
                            field: { onChange, onBlur, value, ref },
                        }) => (
                            <React.Fragment>
                                <Form.Check
                                    type="radio"
                                    name={`radiosClicked.compartilhamentoDadosPessoais-1`}
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
                                    name={`radiosClicked.compartilhamentoDadosPessoais-1`}
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
                <Form.Label as={Col}></Form.Label>
                <Form.Label as={Col}></Form.Label>
                <Form.Label as={Col}></Form.Label>
                <Form.Label as={Col}></Form.Label>
                <Form.Label as={Col}></Form.Label>
                <Col lg={1}>
                    <Row>
                        <CreateCommentBox
                            item={
                                CaseIndexDictionary.compartilhamentoDadosPessoais
                            }
                        />
                    </Row>
                </Col>
            </Row>
            <React.Fragment>
                {fields && fields.length > 0 ? (
                    fields.map((field, index) => (
                        <React.Fragment key={field.id}>
                            <NewSection11FormRowSub
                                className={`mb-3 pt-2 pb-2 ${
                                    index % 2 === 0
                                        ? "bg-primary bg-opacity-10"
                                        : ""
                                }`}
                                disabled={props.disabled}
                                name={`compartilhamentoDadosPessoais[${index}]`}
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
                                                emptyItemCompatilhamentoDados()
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
                                                props.methods.setValue(
                                                    `radiosClicked.compartilhamentoDadosPessoais` as FieldPath<Case>,
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
                                onClick={() =>
                                    append(emptyItemCompatilhamentoDados())
                                }
                                disabled={
                                    !(
                                        props.methods.watch(
                                            `radiosClicked.compartilhamentoDadosPessoais` as FieldPath<Case>
                                        ) === statusRadios.SIM
                                    )
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

export default Section11FormRow;
