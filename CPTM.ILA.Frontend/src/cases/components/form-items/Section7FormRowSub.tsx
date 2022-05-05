import React, { useState } from "react";

import { useFormikContext, getIn, Field } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Case } from "../../../shared/models/cases.model";
import {
  tipoFontesRetencao,
  tipoTempoRetencao,
} from "../../../shared/models/case-helpers/enums.model";
import { Options } from "./../../../access-requests/components/AccessRequestForm";
import Select from "react-select";
import SelectFieldSearch from "./../../../shared/components/UI/SelectFieldSearch";
import SelectFieldMulti from "./../../../shared/components/UI/SelectFieldMulti";

const Section7FormRowSub = (props: {
  name: string;
  className: string;
  systems: string[];
  disabled: boolean;
}) => {
  const { values, touched, errors, handleChange, handleBlur, setFieldValue } =
    useFormikContext<Case>();

  const [isSystemSelect, setIsSystemSelect] = useState(false);

  const [descricao, setDescricao] = useState(
    getIn(values, `${props.name}.descricao`)
  );

  const handleChangeDescricao = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescricao(event.currentTarget.value);
  };
  const handleBlurDescricao = (event: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(event);
    setFieldValue(`${props.name}.descricao`, descricao, true);
  };

  const handleChangeFonteRetencao = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === tipoFontesRetencao.sistema) {
      setIsSystemSelect(true);
    } else {
      setIsSystemSelect(false);
    }
    handleChange(event);
  };

  const selectOptions: Options[] = props.systems.map((s) => ({
    value: s,
    label: s,
  }));

  return (
    <Row className={props.className}>
      <Col lg={1}></Col>
      <Col></Col>
      <Col></Col>
      <Col>
        <Form.Control
          type="text"
          name={`${props.name}.descricao`}
          value={descricao}
          onChange={handleChangeDescricao}
          onBlur={handleBlurDescricao}
          isValid={
            getIn(touched, `${props.name}.descricao`) &&
            !getIn(errors, `${props.name}.descricao`)
          }
          isInvalid={!!getIn(errors, `${props.name}.descricao`)}
          disabled={props.disabled}
        />
        <Form.Control.Feedback type="invalid">
          Esse campo é obrigatório
        </Form.Control.Feedback>
      </Col>
      <Col>
        <Form.Select
          name={`${props.name}.tempoRetencao.value`}
          value={getIn(values, `${props.name}.tempoRetencao.value`)}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={
            getIn(touched, `${props.name}.tempoRetencao.value`) &&
            !getIn(errors, `${props.name}.tempoRetencao.value`)
          }
          isInvalid={!!getIn(errors, `${props.name}.tempoRetencao.value`)}
          disabled={props.disabled}
        >
          {Object.values(tipoTempoRetencao).map((ttr) => (
            <option value={ttr} key={ttr}>
              {ttr}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col>
        <Form.Select
          name={`${props.name}.fonteRetencao.value`}
          value={getIn(values, `${props.name}.fonteRetencao.value`)}
          onChange={handleChangeFonteRetencao}
          onBlur={handleBlur}
          isValid={
            getIn(touched, `${props.name}.fonteRetencao.value`) &&
            !getIn(errors, `${props.name}.fonteRetencao.value`)
          }
          isInvalid={!!getIn(errors, `${props.name}.fonteRetencao.value`)}
          disabled={props.disabled}
        >
          {Object.values(tipoFontesRetencao).map((tfr) => (
            <option value={tfr} key={tfr}>
              {tfr}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col lg={2}>
        {!isSystemSelect ? (
          <Form.Control
            type="text"
            name={`${props.name}.localArmazenamento`}
            value={getIn(values, `${props.name}.localArmazenamento`)}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={
              getIn(touched, `${props.name}.localArmazenamento`) &&
              !getIn(errors, `${props.name}.localArmazenamento`)
            }
            isInvalid={!!getIn(errors, `${props.name}.localArmazenamento`)}
            disabled={props.disabled}
          />
        ) : (
          <React.Fragment>
            {/* <Form.Select
              name={`${props.name}.localArmazenamento`}
              value={getIn(values, `${props.name}.localArmazenamento`)}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={
                getIn(touched, `${props.name}.localArmazenamento`) &&
                !getIn(errors, `${props.name}.localArmazenamento`)
              }
              isInvalid={!!getIn(errors, `${props.name}.localArmazenamento`)}
            >
              {Object.values(props.systems).map((s) => (
                <option value={s} key={s}>
                  {s}
                </option>
              ))}
            </Form.Select> */}
            <Field
              component={SelectFieldSearch}
              name={`${props.name}.localArmazenamento`}
              options={selectOptions}
              disabled={props.disabled}
            />
          </React.Fragment>
        )}
      </Col>
      <Col lg={1}></Col>
    </Row>
  );
};

export default Section7FormRowSub;