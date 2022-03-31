import React, { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

import { AccessRequest } from "../../shared/models/access-request.model";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import AccessRequestsList from "./AccessRequestsList";

const GroupsAccessRequestsListGetter = () => {
  const [accessRequests, setAccessRequests] = useState<AccessRequest[]>([]);

  const { token } = useContext(AuthContext);

  const { isLoading, error, isWarning, sendRequest, clearError } =
    useHttpClient();

  useEffect(() => {
    const getGroupsAccessRequests = async () => {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_CONNSTR}/access-requests/groups`,
        undefined,
        undefined,
        { Authorization: "Bearer " + token }
      );
      const loadedAccessRequests: AccessRequest[] = responseData.groupRequests;
      setAccessRequests(loadedAccessRequests);
    };

    getGroupsAccessRequests().catch((error) => {
      console.log(error);
    });
  }, [sendRequest, token]);

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
      <h2>Requisições de Acesso a Grupos</h2>
      {error && (
        <Alert
          variant={isWarning ? "warning" : "danger"}
          onClose={clearError}
          dismissible
        >
          {error}
        </Alert>
      )}
      <AccessRequestsList items={accessRequests} />
    </React.Fragment>
  );
};

export default GroupsAccessRequestsListGetter;