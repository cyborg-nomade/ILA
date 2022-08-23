import React, { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

import { CaseListItem } from "../../shared/models/DTOs/case-list-item.model";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CasesList from "../components/CasesList";

const ContinueCaseListGetter = () => {
    const [cases, setCases] = useState<CaseListItem[]>([]);

    const { token, currentGroup, isGroupTodos, user } = useContext(AuthContext);

    const { isLoading, error, isWarning, sendRequest, clearError } =
        useHttpClient();

    useEffect(() => {
        const getUnfinishedCases = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/cases/group/${currentGroup.id}/status/false/false/false`,
                undefined,
                undefined,
                { Authorization: "Bearer " + token }
            );
            const loadedCases: CaseListItem[] = responseData.caseListItems;
            console.log("currentGroup: ", currentGroup);
            console.log("loadedCases: ", loadedCases);

            setCases(loadedCases);
        };

        const getAllGroupsUnfinishedCases = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/cases/user/${user.id}/status/false/false/false`,
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
            getUnfinishedCases().catch((error) => {
                console.log(error);
            });
        } else {
            getAllGroupsUnfinishedCases().catch((error) => {
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
            <h2>Continuar Processo - Todos os seus processos iniciados</h2>
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

export default ContinueCaseListGetter;
