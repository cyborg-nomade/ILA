import React, { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

import { CaseListItem } from "../../shared/models/DTOs/case-list-item.model";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CasesList from "../components/CasesList";

const EditCaseListGetter = () => {
    const [cases, setCases] = useState<CaseListItem[]>([]);

    const { token, currentGroup, user, isGroupTodos } = useContext(AuthContext);

    const { isLoading, error, isWarning, sendRequest, clearError } =
        useHttpClient();

    useEffect(() => {
        const getFinishedCases = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/cases/group/${currentGroup.id}/status/false/true/false`,
                undefined,
                undefined,
                { Authorization: "Bearer " + token }
            );
            const loadedCases: CaseListItem[] = responseData.caseListItems;
            console.log("currentGroup: ", currentGroup);
            console.log("loadedCases: ", loadedCases);

            setCases(loadedCases);
        };

        const getAllGroupsFinishedCases = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/cases/user/${user.id}/status/false/true/false`,
                undefined,
                undefined,
                { Authorization: "Bearer " + token }
            );
            const loadedCases: CaseListItem[] = responseData.caseListItems;
            console.log("currentGroup: ", currentGroup);
            console.log("loadedCases: ", loadedCases);

            setCases(loadedCases);
        };

        if (!isGroupTodos) {
            getFinishedCases().catch((error) => {
                console.log(error);
            });
        } else {
            getAllGroupsFinishedCases().catch((error) => {
                console.log(error);
            });
        }
    }, [sendRequest, token, currentGroup, isGroupTodos, user.id]);

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
            <h2>
                Alterar Processo Existente - Todos os seus processos aprovados
            </h2>
            {error && (
                <Alert
                    variant={isWarning ? "warning" : "danger"}
                    onClose={clearError}
                    dismissible
                >
                    {error}
                </Alert>
            )}
            <CasesList items={cases} redirect={true} />
        </React.Fragment>
    );
};

export default EditCaseListGetter;
