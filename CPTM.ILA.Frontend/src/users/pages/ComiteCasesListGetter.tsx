import React, { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

import { CaseListItem } from "../../shared/models/DTOs/case-list-item.model";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CasesList from "../../cases/components/CasesList";

const ComiteCasesListGetter = () => {
    const [cases, setCases] = useState<CaseListItem[]>([]);

    const { token, currentGroup, user, isGroupTodos } = useContext(AuthContext);

    const { isLoading, error, isWarning, sendRequest, clearError } =
        useHttpClient();

    useEffect(() => {
        const getSelectedGroupApprovedCases = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/cases/group/${currentGroup.id}/`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            const loadedCases: CaseListItem[] = responseData.caseListItems;
            console.log("loadedCases: ", loadedCases);
            setCases(loadedCases);
        };
        const getAllComiteApprovedCases = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/cases/user/${user.id}/`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            const loadedCases: CaseListItem[] = responseData.caseListItems;
            console.log("loadedCases: ", loadedCases);
            setCases(loadedCases);
        };

        if (user.isComite && isGroupTodos) {
            getAllComiteApprovedCases().catch((error) => {
                console.log(error);
            });
        } else {
            getSelectedGroupApprovedCases().catch((error) => {
                console.log(error);
            });
        }
    }, [
        sendRequest,
        token,
        currentGroup.id,
        user.isComite,
        user.id,
        currentGroup.nome,
        isGroupTodos,
    ]);

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
            {currentGroup.nome !== "TODOS" && (
                <h1>
                    Meus Processos - Todos os processos do grupo selecionado
                </h1>
            )}
            {currentGroup.nome === "TODOS" && (
                <h1>
                    Meus Processos - Todos os processos de todos os meus grupos
                </h1>
            )}
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

export default ComiteCasesListGetter;
