import React from "react";
import { Controller, FieldPath, UseFormReturn } from "react-hook-form";
import _ from "lodash";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Case } from "../../../shared/models/cases.model";

const Section2ForRowSub = (props: {
    name: FieldPath<Case>;
    disabled: boolean;
    methods: UseFormReturn<Case>;
}) => {
    return (
        <Row className="mb-3">
            <Col lg={1}></Col>
            <Col></Col>
            <Col>
                <Controller
                    rules={{
                        required: true,
                        maxLength: 250,
                    }}
                    control={props.methods.control}
                    name={`${props.name}.nome` as FieldPath<Case>}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            disabled={props.disabled}
                            type="text"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value as string}
                            ref={ref}
                            isInvalid={
                                !!_.get(
                                    props.methods.formState.errors,
                                    `${props.name}.nome`
                                )
                            }
                        />
                    )}
                />
            </Col>
            <Col>
                <Controller
                    rules={{
                        required: true,
                        maxLength: 250,
                    }}
                    control={props.methods.control}
                    name={`${props.name}.area` as FieldPath<Case>}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            disabled={props.disabled}
                            type="text"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value as string}
                            ref={ref}
                            isInvalid={
                                !!_.get(
                                    props.methods.formState.errors,
                                    `${props.name}.area`
                                )
                            }
                        />
                    )}
                />
            </Col>
            <Col>
                <Controller
                    rules={{
                        required: true,
                        maxLength: 250,
                    }}
                    control={props.methods.control}
                    name={`${props.name}.telefone` as FieldPath<Case>}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            disabled={props.disabled}
                            type="text"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value as string}
                            ref={ref}
                            isInvalid={
                                !!_.get(
                                    props.methods.formState.errors,
                                    `${props.name}.telefone`
                                )
                            }
                        />
                    )}
                />
            </Col>
            <Col>
                <Controller
                    rules={{
                        required: true,
                        maxLength: 250,
                    }}
                    control={props.methods.control}
                    name={`${props.name}.email` as FieldPath<Case>}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                            disabled={props.disabled}
                            type="text"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value as string}
                            ref={ref}
                            isInvalid={
                                !!_.get(
                                    props.methods.formState.errors,
                                    `${props.name}.email`
                                )
                            }
                        />
                    )}
                />
            </Col>
        </Row>
    );
};

export default Section2ForRowSub;
