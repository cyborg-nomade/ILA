import React, { useEffect, useState } from "react";
import { Controller, UseFormReturn, useWatch } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Case } from "../../../shared/models/cases.model";
import { CaseIndexDictionary } from "../../../shared/models/case-index.dictionary";
import CreateCommentBox from "../../../threads-comments/components/CreateCommentBox";
import { statusRadios } from "../../../shared/models/case-helpers/enums.model";
import { AiFillQuestionCircle } from "react-icons/ai";

const Section3FormRow = (props: {
    disabled: boolean;
    methods: UseFormReturn<Case>;
    radioCheckedHandler: (radioChackedName: string) => void;
    isNew: boolean;
}) => {
    const handleTrataRadio = (status: statusRadios) => {
        if (status === statusRadios.NÃO) {
            props.methods.setValue("fasesCicloTratamento.coleta", false);
            props.methods.setValue("fasesCicloTratamento.retencao", false);
            props.methods.setValue("fasesCicloTratamento.processamento", false);
            props.methods.setValue(
                "fasesCicloTratamento.compartilhamento",
                false
            );
            props.methods.setValue("fasesCicloTratamento.eliminacao", false);
        }
    };

    return (
        <Row className="mb-3 align-items-center bg-primary bg-opacity-10">
            <Col lg={1}>
                <p>{CaseIndexDictionary.fasesCicloTratamento.number}</p>
            </Col>
            <Col>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip className="text-muted">
                            Informações sobre o ciclo de vida do tratamento de
                            dados pessoais podem ser observadas no capítulo 3 do
                            Guia de Boas Práticas LGPD, disponível em
                            https://www.gov.br/governodigital/pt-br/governanca-de-dados/guia-de-boas-praticas-lei-geral-de-protecao-de-dados-lgpd
                        </Tooltip>
                    }
                >
                    <Form.Label>
                        {CaseIndexDictionary.fasesCicloTratamento.title}{" "}
                        <AiFillQuestionCircle />
                    </Form.Label>
                </OverlayTrigger>
            </Col>
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
                    name="radiosClicked.fasesCicloTratamento"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <React.Fragment>
                            <Form.Check
                                type="radio"
                                name="radiosClicked.fasesCicloTratamento-1"
                                label="Sim"
                                value={statusRadios.SIM}
                                checked={
                                    (value as statusRadios) === statusRadios.SIM
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
                                name="radiosClicked.fasesCicloTratamento-1"
                                label="Não"
                                value={statusRadios.NÃO}
                                checked={
                                    (value as statusRadios) === statusRadios.NÃO
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
            <Col className="d-grid justify-content-center">
                <Controller
                    control={props.methods.control}
                    name="fasesCicloTratamento.coleta"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.fasesCicloTratamento"
                                    ) === statusRadios.SIM
                                ) || props.disabled
                            }
                            type="checkbox"
                            onChange={onChange}
                            onBlur={onBlur}
                            checked={value}
                            ref={ref}
                            isInvalid={
                                !!props.methods.formState.errors
                                    .fasesCicloTratamento?.coleta
                            }
                        />
                    )}
                />
            </Col>
            <Col className="d-grid justify-content-center">
                <Controller
                    control={props.methods.control}
                    name="fasesCicloTratamento.retencao"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.fasesCicloTratamento"
                                    ) === statusRadios.SIM
                                ) || props.disabled
                            }
                            type="checkbox"
                            onChange={onChange}
                            onBlur={onBlur}
                            checked={value}
                            ref={ref}
                            isInvalid={
                                !!props.methods.formState.errors
                                    .fasesCicloTratamento?.coleta
                            }
                        />
                    )}
                />
            </Col>
            <Col className="d-grid justify-content-center">
                <Controller
                    control={props.methods.control}
                    name="fasesCicloTratamento.processamento"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.fasesCicloTratamento"
                                    ) === statusRadios.SIM
                                ) || props.disabled
                            }
                            type="checkbox"
                            onChange={onChange}
                            onBlur={onBlur}
                            checked={value}
                            ref={ref}
                            isInvalid={
                                !!props.methods.formState.errors
                                    .fasesCicloTratamento?.coleta
                            }
                        />
                    )}
                />
            </Col>
            <Col className="d-grid justify-content-center">
                <Controller
                    control={props.methods.control}
                    name="fasesCicloTratamento.compartilhamento"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.fasesCicloTratamento"
                                    ) === statusRadios.SIM
                                ) || props.disabled
                            }
                            type="checkbox"
                            onChange={onChange}
                            onBlur={onBlur}
                            checked={value}
                            ref={ref}
                            isInvalid={
                                !!props.methods.formState.errors
                                    .fasesCicloTratamento?.coleta
                            }
                        />
                    )}
                />
            </Col>
            <Col className="d-grid justify-content-center">
                <Controller
                    control={props.methods.control}
                    name="fasesCicloTratamento.eliminacao"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.fasesCicloTratamento"
                                    ) === statusRadios.SIM
                                ) || props.disabled
                            }
                            type="checkbox"
                            onChange={onChange}
                            onBlur={onBlur}
                            checked={value}
                            ref={ref}
                            isInvalid={
                                !!props.methods.formState.errors
                                    .fasesCicloTratamento?.coleta
                            }
                        />
                    )}
                />
            </Col>
            <Col lg={1} className="p-0">
                <CreateCommentBox
                    item={CaseIndexDictionary.fasesCicloTratamento}
                />
            </Col>
        </Row>
    );
};

export default Section3FormRow;
