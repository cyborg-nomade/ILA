import React from "react";
import _ from "lodash";
import { Controller, FieldPath, UseFormReturn } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Case } from "../../../shared/models/cases.model";
import { CaseIndexDictionary } from "../../../shared/models/case-index.dictionary";
import CreateCommentBox from "./../../../threads-comments/components/CreateCommentBox";

const getSelectValue = (value: string, fontes: string[]) => {
    if (fontes.includes(value)) {
        return fontes
            .map((s) => ({
                value: s,
                label: s,
            }))
            .find((c) => c.value === value);
    } else {
        return { value: value, label: value };
    }
};

const Section5FormRow = (props: {
    disabled: boolean;
    name: string;
    methods: UseFormReturn<Case>;
    fonteSystems: string[];
}) => {
    return (
        <Row className="mb-3">
            <Col lg={1}>
                <p>{CaseIndexDictionary.fonteDados.number}</p>
            </Col>
            <Form.Label as={Col}>
                {CaseIndexDictionary.fonteDados.title}
            </Form.Label>
            <Col lg={8}>
                <Controller
                    rules={{ required: true }}
                    control={props.methods.control}
                    name={`${props.name}.value` as FieldPath<Case>}
                    render={({ field: { onChange, value, ref } }) => (
                        <CreatableSelect
                            ref={ref}
                            options={props.fonteSystems.map((s) => ({
                                value: s,
                                label: s,
                            }))}
                            value={getSelectValue(
                                value as string,
                                props.fonteSystems
                            )}
                            onChange={(val) => onChange(val?.value)}
                            isSearchable
                            isDisabled={props.disabled}
                            placeholder="Selecione a fonte de dados"
                            noOptionsMessage={() => "Nenhum resultado"}
                        />
                    )}
                />
                {!!_.get(props.methods.formState.errors, `${props.name}`) && (
                    <div className="invalid-feedback-react-select">
                        Esse campo é obrigatório
                    </div>
                )}
            </Col>
            <Col lg={1}>
                <Row>
                    <CreateCommentBox item={CaseIndexDictionary.fonteDados} />
                </Row>
            </Col>
        </Row>
    );
};

export default Section5FormRow;
