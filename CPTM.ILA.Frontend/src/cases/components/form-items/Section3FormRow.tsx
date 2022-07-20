import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
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
}) => {
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
                                if (
                                    value ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.retencao"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.processamento"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.compartilhamento"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.eliminacao"
                                    )
                                )
                                    return true;
                                return false;
                            },
                        },
                    }}
                    control={props.methods.control}
                    name="fasesCicloTratamento.coleta"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.hasOperador"
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
                    rules={{
                        validate: {
                            required: (value) => {
                                if (
                                    props.methods.watch(
                                        "fasesCicloTratamento.coleta"
                                    ) ||
                                    value ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.processamento"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.compartilhamento"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.eliminacao"
                                    )
                                )
                                    return true;
                                return false;
                            },
                        },
                    }}
                    control={props.methods.control}
                    name="fasesCicloTratamento.retencao"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.hasOperador"
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
                    rules={{
                        validate: {
                            required: (value) => {
                                if (
                                    props.methods.watch(
                                        "fasesCicloTratamento.coleta"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.retencao"
                                    ) ||
                                    value ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.compartilhamento"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.eliminacao"
                                    )
                                )
                                    return true;
                                return false;
                            },
                        },
                    }}
                    control={props.methods.control}
                    name="fasesCicloTratamento.processamento"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.hasOperador"
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
                    rules={{
                        validate: {
                            required: (value) => {
                                if (
                                    props.methods.watch(
                                        "fasesCicloTratamento.coleta"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.retencao"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.processamento"
                                    ) ||
                                    value ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.eliminacao"
                                    )
                                )
                                    return true;
                                return false;
                            },
                        },
                    }}
                    control={props.methods.control}
                    name="fasesCicloTratamento.compartilhamento"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.hasOperador"
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
                    rules={{
                        validate: {
                            required: (value) => {
                                if (
                                    props.methods.watch(
                                        "fasesCicloTratamento.coleta"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.retencao"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.processamento"
                                    ) ||
                                    props.methods.watch(
                                        "fasesCicloTratamento.compartilhamento"
                                    ) ||
                                    value
                                )
                                    return true;
                                return false;
                            },
                        },
                    }}
                    control={props.methods.control}
                    name="fasesCicloTratamento.eliminacao"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Check
                            disabled={
                                !(
                                    props.methods.watch(
                                        "radiosClicked.hasOperador"
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
