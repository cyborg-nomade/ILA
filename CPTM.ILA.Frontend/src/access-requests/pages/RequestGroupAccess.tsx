import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import { BaseAccessRequest } from "../../shared/models/access-request.model";
import { useHttpClient } from "../../shared/hooks/http-hook";
import AccessRequestForm from "../../access-requests/components/AccessRequestForm";
import { emptyAccessRequest } from "./../../shared/models/access-request.model";

const RequestGroupAccess = () => {
  const [message, setMessage] = useState("");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submitRegisterHandler = async (accessRequest: BaseAccessRequest) => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_CONNSTR}/access-requests/groups`,
        "POST",
        JSON.stringify(accessRequest),
        {
          "Content-Type": "application/json",
        }
      );

      setMessage(responseData.message);
    } catch (error) {
      console.log(error);
    }
  };

  const clearMessage = () => {
    setMessage("");
  };

  if (isLoading) {
    return (
      <Row className="justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    );
  }

  return (
    <React.Fragment>
      <AccessRequestForm
        item={emptyAccessRequest()}
        groups={true}
        onSubmit={submitRegisterHandler}
      />
      {error && (
        <Row
          className="justify-content-center mx-auto"
          style={{ width: "28rem" }}
        >
          <Alert variant="danger" onClose={clearError} dismissible>
            {error}
          </Alert>
        </Row>
      )}
      {message && (
        <Row
          className="justify-content-center mx-auto"
          style={{ width: "28rem" }}
        >
          <Alert variant="success" onClose={clearMessage} dismissible>
            {message}
          </Alert>
        </Row>
      )}
    </React.Fragment>
  );
};

export default RequestGroupAccess;