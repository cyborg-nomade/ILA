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

import {
    emptyItemContratoTI,
    itemContratoTI,
} from "../../../shared/models/case-helpers/case-helpers.model";
import { CaseIndexDictionary } from "../../../shared/models/case-index.dictionary";
import { Case } from "../../../shared/models/cases.model";
import CreateCommentBox from "./../../../threads-comments/components/CreateCommentBox";
import Section14FormRowSub from "./Section14FormRowSub";
import { statusRadios } from "../../../shared/models/case-helpers/enums.model";

const Section14FormRow = (props: {
    disabled: boolean;
    methods: UseFormReturn<Case>;
}) => {
    const { fields, append, remove } = useFieldArray({
        control: props.methods.control, // control props comes from useForm
        name: "contratoServicosTITratamentoDados" as const, // unique name for your Field Array
    });

    const handleTrataRadio = (status: statusRadios) => {
        if (status === statusRadios.NÃO) {
            props.methods.setValue("contratoServicosTITratamentoDados", []);
        }
        if (status === statusRadios.SIM) {
            append(emptyItemContratoTI());
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
                            `radiosClicked.contratoServicosTITratamentoDados` as FieldPath<Case>
                        }
                        render={({
                            field: { onChange, onBlur, value, ref },
                        }) => (
                            <React.Fragment>
                                <Form.Check
                                    type="radio"
                                    name={`radiosClicked.contratoServicosTITratamentoDados-1`}
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
                                    name={`radiosClicked.contratoServicosTITratamentoDados-1`}
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
                <Col></Col>
                <Col lg={1}>
                    <Row>
                        <CreateCommentBox
                            item={
                                CaseIndexDictionary.contratoServicosTITratamentoDados
                            }
                        />
                    </Row>
                </Col>
            </Row>

            <React.Fragment>
                {fields && fields.length > 0 ? (
                    fields.map((field, index) => (
                        <React.Fragment key={field.id}>
                            <Section14FormRowSub
                                className={`mb-3 pt-2 pb-2 ${
                                    index % 2 === 0
                                        ? "bg-primary bg-opacity-10"
                                        : ""
                                }`}
                                name={`contratoServicosTITratamentoDados[${index}]`}
                                methods={props.methods}
                                disabled={props.disabled}
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
                                            append(emptyItemContratoTI())
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
                                                    `radiosClicked.contratoServicosTITratamentoDados` as FieldPath<Case>,
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
                                            `radiosClicked.contratoServicosTITratamentoDados` as FieldPath<Case>
                                        ) === statusRadios.SIM
                                    )
                                }
                                onClick={() => append(emptyItemContratoTI())}
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

export default Section14FormRow;
