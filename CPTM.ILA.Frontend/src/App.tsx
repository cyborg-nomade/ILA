import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import MainHeader from "./shared/components/nav/MainHeader";
import "./App.css";
import Register from "./users/pages/Register";

const AllCasesList = React.lazy(() => import("./cases/pages/AllCasesList"));
const ApproveCaseList = React.lazy(
  () => import("./cases/pages/ApproveCaseList")
);
const EditCase = React.lazy(() => import("./cases/pages/EditCase"));
const NewCase = React.lazy(() => import("./cases/pages/NewCase"));
const Login = React.lazy(() => import("./users/pages/Login"));
const UserCasesList = React.lazy(() => import("./users/pages/UserCasesList"));
const UserPage = React.lazy(() => import("./users/pages/UserPage"));
const ApproveCase = React.lazy(() => import("./cases/pages/ApproveCase"));
const ApprovePage = React.lazy(() => import("./cases/pages/ApprovePage"));
const AllCasesPage = React.lazy(() => import("./cases/pages/AllCasesPage"));
const AccessRequestPage = React.lazy(
  () => import("./access-requests/pages/AccessRequestPage")
);
const AccessRequestList = React.lazy(
  () => import("./access-requests/pages/AccessRequestList")
);
const ApproveAccessRequest = React.lazy(
  () => import("./access-requests/pages/ApproveAccessRequest")
);

const App = () => {
  const { token, login, logout, userId, username, isComite } = useAuth();

  let routes;

  if (!token) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Login />} />
        <Route path="/request-access" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  } else if (token && !isComite) {
    routes = (
      <React.Fragment>
        <Route path="/:uid/cases" element={<UserPage />}>
          <Route index element={<UserCasesList />} />
          <Route path="new" element={<NewCase />} />
          <Route path=":cid" element={<EditCase />} />
        </Route>
        <Route path="/" element={<Navigate to={`../${userId}/cases`} />} />
        <Route path="/*" element={<Navigate to={`../${userId}/cases`} />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/comite/cases" element={<AllCasesPage />}>
          <Route index element={<AllCasesList />} />
          <Route path=":cid" element={<EditCase />} />
        </Route>
        <Route path="/comite/cases/approve" element={<ApprovePage />}>
          <Route index element={<ApproveCaseList />} />
          <Route path=":cid" element={<ApproveCase />} />
        </Route>
        <Route
          path="/comite/access-requests/approve"
          element={<AccessRequestPage />}
        >
          <Route index element={<AccessRequestList />} />
          <Route path=":arid" element={<ApproveAccessRequest />} />
        </Route>
        <Route path="/" element={<Navigate replace to="../comite/cases" />} />
        <Route path="*" element={<Navigate replace to="../comite/cases" />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        login,
        logout,
        isComite,
        userId,
        token,
        username,
      }}
    >
      <MainHeader />
      <Container className="mt-5">
        <Suspense
          fallback={
            <Row className="justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Row>
          }
        >
          <Routes>{routes}</Routes>
        </Suspense>
      </Container>
    </AuthContext.Provider>
  );
};

export default App;
