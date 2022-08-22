import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";

import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Select, { ActionMeta, GroupBase, MultiValue } from "react-select";
import { useParams } from "react-router-dom";
import { Group } from "../../shared/models/access-control/group.model";
import {
    ComiteMember,
    emptyComiteMember,
} from "../../shared/models/DTOs/comite-member";
import { emptyUserDto, UserDto } from "../../shared/models/DTOs/user-dto";

const UserGroupMgmtCockpit = () => {
    const { token } = useContext(AuthContext);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [userEditing, setUserEditing] = useState(emptyUserDto());
    const [groups, setGroups] = useState<
        GroupBase<{
            value: string;
            label: string;
        }>[]
    >([]);
    const [userGroups, setUserGroups] = useState<Group[]>([]);
    const [userGroupsToAdd, setUserGroupsToAdd] = useState<string[]>([]);
    const [message, setMessage] = useState("");

    const ueid = useParams().uid;

    useEffect(() => {
        const getUserEditing = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/users/${ueid}`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            const loadedUser: UserDto = responseData.userDto;
            console.log("loadedUser", loadedUser);

            setUserEditing(loadedUser);
        };

        getUserEditing().catch((error) => {
            console.log(error);
        });

        return () => {
            setUserEditing(emptyUserDto());
        };
    }, [ueid, sendRequest, token]);

    useEffect(() => {
        const getUserGroups = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/access-requests/groups/user/${ueid}`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            const userLoadedGroups: Group[] = responseData.userGroups;
            console.log("userLoadedGroups", userLoadedGroups);

            setUserGroups(userLoadedGroups);
        };

        getUserGroups().catch((error) => {
            console.log(error);
        });

        return () => {
            setUserGroups([]);
        };
    }, [ueid, sendRequest, token]);

    const handleGroupsToAddChange = (
        options: MultiValue<{ value: string; label: string }>,
        actionMeta: ActionMeta<{ value: string; label: string }>
    ) => {
        if (actionMeta.action === "clear") setUserGroupsToAdd([]);
        const values = options.map((o) => o.value);
        if (options) setUserGroupsToAdd(values);
    };

    useEffect(() => {
        const getGroups = async () => {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/groups`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                }
            );

            const groupedOptions: GroupBase<{
                value: string;
                label: string;
            }>[] = [
                {
                    label: "Diretorias",
                    options: responseData.diretorias.map((d: string) => ({
                        value: d,
                        label: d,
                    })),
                },
                {
                    label: "Gerencias Gerais",
                    options: responseData.gerenciasGerais.map((gg: string) => ({
                        value: gg,
                        label: gg,
                    })),
                },
                {
                    label: "Gerencias",
                    options: responseData.gerencias.map((g: string) => ({
                        value: g,
                        label: g,
                    })),
                },
                {
                    label: "Departamentos",
                    options: responseData.deptos.map((dpto: string) => ({
                        value: dpto,
                        label: dpto,
                    })),
                },
                {
                    label: "Núcleos",
                    options: responseData.nucleos.map((n: string) => ({
                        value: n,
                        label: n,
                    })),
                },
            ];

            console.log("groupedOptions: ", groupedOptions);

            setGroups(groupedOptions);
        };

        getGroups().catch((error) => {
            console.log(error);
        });

        return () => {
            setGroups([]);
        };
    }, [sendRequest]);

    const handleAddUserGroups = async () => {
        console.log(userGroupsToAdd);

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/access-requests/groups/user/${ueid}/add`,
                "POST",
                JSON.stringify(userGroupsToAdd),
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            console.log("add user groups response: ", responseData);
            setMessage(responseData.message);

            const responseDataUserGroups = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/access-requests/groups/user/${ueid}`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            const userLoadedGroups: Group[] = responseDataUserGroups.userGroups;
            console.log("cmLoadedGroups: ", userLoadedGroups);

            setUserGroups(userLoadedGroups);
            setUserGroupsToAdd([]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleRemoveUserGroups = async (gid: number) => {
        console.log("gid to remove: ", gid);

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/access-requests/groups/user/${ueid}/remove`,
                "POST",
                JSON.stringify(gid),
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            console.log("remove user group response: ", responseData);
            setMessage(responseData.message);

            const responseDataUserGroups = await sendRequest(
                `${process.env.REACT_APP_CONNSTR}/access-requests/groups/user/${ueid}`,
                undefined,
                undefined,
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }
            );

            const userLoadedGroups: Group[] = responseDataUserGroups.userGroups;
            console.log("userLoadedGroups: ", userLoadedGroups);

            setUserGroups(userLoadedGroups);
        } catch (err) {
            console.log(err);
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
            <h2>Alterar Grupos do Usuário - {userEditing.nome} </h2>
            {error && (
                <Row className="justify-content-center mx-auto">
                    <Alert variant="danger" onClose={clearError} dismissible>
                        {error}
                    </Alert>
                </Row>
            )}
            {message && (
                <Row className="justify-content-center mx-auto">
                    <Alert variant="success" onClose={clearMessage} dismissible>
                        {message}
                    </Alert>
                </Row>
            )}
            <Card className="mx-auto mt-4" style={{ width: "28rem" }}>
                <Card.Title className="pt-3 px-3">Adicionar Grupo</Card.Title>
                <Card.Body>
                    <InputGroup>
                        <InputGroup.Text>Novos Grupos: </InputGroup.Text>
                        <div className="form-control p-0">
                            <Select
                                options={groups}
                                value={userGroupsToAdd.map((v) => ({
                                    value: v,
                                    label: v,
                                }))}
                                onChange={handleGroupsToAddChange}
                                isSearchable
                                isClearable
                                isMulti
                                placeholder="Selecione os grupos a serem acessados"
                            />
                        </div>
                        <Button onClick={handleAddUserGroups}>Adicionar</Button>
                    </InputGroup>
                </Card.Body>
            </Card>
            <Card
                className="justify-content-center mx-auto mt-4"
                style={{ width: "28rem" }}
            >
                <Card.Title className="pt-3 px-3">Grupos Atuais</Card.Title>
                <Card.Body>
                    <ListGroup>
                        {userGroups.map((g) => (
                            <ListGroup.Item className="p-0" key={g.id}>
                                <InputGroup>
                                    <InputGroup.Text key={g.id} as={Col} lg={9}>
                                        {g.nome}
                                    </InputGroup.Text>
                                    <Col lg={3} className="m-0">
                                        <Button
                                            className="w-100"
                                            variant="danger"
                                            onClick={async () => {
                                                await handleRemoveUserGroups(
                                                    g.id
                                                );
                                            }}
                                        >
                                            Remover
                                        </Button>
                                    </Col>
                                </InputGroup>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default UserGroupMgmtCockpit;
