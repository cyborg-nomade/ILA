import React, { useState } from "react";
import _ from "lodash";
import { Controller, FieldPath, UseFormReturn } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Case } from "../../../shared/models/cases.model";
import { tipoCategoriaTitulares } from "../../../shared/models/case-helpers/enums.model";
import CreateCommentBox from "../../../threads-comments/components/CreateCommentBox";
import { AiFillQuestionCircle } from "react-icons/ai";

const Section10FormRow = (props: {
    label: string;
    disabled: boolean;
    name: string;
    className: string;
    full: boolean;
    tooltip?: string;
    itemRef: { number: string; title: string };
    methods: UseFormReturn<Case>;
}) => {
    const trataDadosInit = props.methods.getValues(
        `${props.name}.trataDados` as FieldPath<Case>
    );

    const [isDescricaoEnabled, setIsDescricaoEnabled] = useState(
        (trataDadosInit as string) === "SIM"
    );

    const toggleEnableDescricao = (value: string) => {
        if (value === "NÃO") {
            setIsDescricaoEnabled(false);
            props.methods.setValue(
                `${props.name}.descricaoDados` as FieldPath<Case>,
                ""
            );
        } else {
            setIsDescricaoEnabled(true);
        }
    };

    return (
        <Row className={props.className}>
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
                        {props.label} <AiFillQuestionCircle />
                    </Form.Label>
                </OverlayTrigger>
            ) : (
                <Form.Label as={Col}>{props.label}</Form.Label>
            )}
            {props.full ? (
                <React.Fragment>
                    <Col>
                        <Controller
                            rules={{ required: true }}
                            control={props.methods.control}
                            name={
                                `${props.name}.tipoCategoria.value` as FieldPath<Case>
                            }
                            render={({
                                field: { onChange, onBlur, value, ref },
                            }) => (
                                <Form.Select
                                    disabled={props.disabled}
                                    value={value as string}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    ref={ref}
                                    isInvalid={
                                        !!_.get(
                                            props.methods.formState.errors,
                                            `${props.name}.tipoCategoria.value`
                                        )
                                    }
                                >
                                    {Object.values(tipoCategoriaTitulares).map(
                                        (ctg) => (
                                            <option value={ctg} key={ctg}>
                                                {ctg}
                                            </option>
                                        )
                                    )}
                                </Form.Select>
                            )}
                        />
                    </Col>
                    <Col>
                        <Controller
                            rules={
                                isDescricaoEnabled
                                    ? { required: true }
                                    : { required: false }
                            }
                            control={props.methods.control}
                            name={`${props.name}.descricao` as FieldPath<Case>}
                            render={({
                                field: { onChange, onBlur, value, ref },
                            }) => (
                                <Form.Control
                                    disabled={props.disabled}
                                    type="text"
                                    value={value as string}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    isInvalid={
                                        !!_.get(
                                            props.methods.formState.errors,
                                            `${props.name}.descricao`
                                        )
                                    }
                                    ref={ref}
                                />
                            )}
                        />
                    </Col>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Col>
                        <Controller
                            rules={{ required: true }}
                            control={props.methods.control}
                            name={`${props.name}.trataDados` as FieldPath<Case>}
                            render={({
                                field: { onChange, onBlur, value, ref },
                            }) => (
                                // <ToggleButtonGroup
                                //     name={`${props.name}.trataDados-${props.itemRef.number}`}
                                //     type="radio"
                                //     value={value}
                                //     onChange={(val: string) => {
                                //         toggleEnableDescricao(val);
                                //         onChange(val);
                                //     }}
                                //     onBlur={onBlur}
                                //     ref={ref}
                                // >
                                //     <ToggleButton
                                //         id={`${props.name}.trataDados-${props.itemRef.number}-1`}
                                //         disabled={props.disabled}
                                //         value="SIM"
                                //     >
                                //         SIM
                                //     </ToggleButton>
                                //     <ToggleButton
                                //         id={`${props.name}.trataDados-${props.itemRef.number}-2`}
                                //         disabled={props.disabled}
                                //         value="NÃO"
                                //     >
                                //         NÃO
                                //     </ToggleButton>
                                // </ToggleButtonGroup>
                                <React.Fragment>
                                    <Form.Check
                                        type="radio"
                                        name={`${props.name}.trataDados-${props.itemRef.number}`}
                                        label="Sim"
                                        value={"SIM"}
                                        checked={(value as string) === "SIM"}
                                        disabled={props.disabled}
                                        onChange={(val: {
                                            target: { value: string };
                                        }) => {
                                            if (val.target.value === "SIM") {
                                                toggleEnableDescricao("SIM");
                                                onChange("SIM");
                                            }
                                        }}
                                        isInvalid={
                                            value !== "NÃO" && value !== "SIM"
                                        }
                                        onBlur={onBlur}
                                        ref={ref}
                                    />
                                    <Form.Check
                                        type="radio"
                                        name={`${props.name}.trataDados-${props.itemRef.number}`}
                                        label="Não"
                                        value={"NÃO"}
                                        checked={(value as string) === "NÃO"}
                                        disabled={props.disabled}
                                        onChange={(val: {
                                            target: { value: string };
                                        }) => {
                                            if (val.target.value === "NÃO") {
                                                toggleEnableDescricao("NÃO");
                                                onChange("NÃO");
                                            }
                                        }}
                                        isInvalid={
                                            value !== "NÃO" && value !== "SIM"
                                        }
                                        onBlur={onBlur}
                                        ref={ref}
                                    />
                                </React.Fragment>
                            )}
                        />
                    </Col>
                    <Col>
                        <Controller
                            rules={
                                isDescricaoEnabled
                                    ? { required: true }
                                    : { required: false }
                            }
                            control={props.methods.control}
                            name={
                                `${props.name}.descricaoDados` as FieldPath<Case>
                            }
                            render={({
                                field: { onChange, onBlur, value, ref },
                            }) => (
                                <Form.Control
                                    disabled={
                                        props.disabled || !isDescricaoEnabled
                                    }
                                    type="text"
                                    value={value as string}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    isInvalid={
                                        !!_.get(
                                            props.methods.formState.errors,
                                            `${props.name}.descricaoDados`
                                        )
                                    }
                                    ref={ref}
                                />
                            )}
                        />
                    </Col>
                </React.Fragment>
            )}
            <Col lg={1}>
                {!props.full && (
                    <Row>
                        <CreateCommentBox item={props.itemRef} />
                    </Row>
                )}
            </Col>
        </Row>
    );
};

export default Section10FormRow;
