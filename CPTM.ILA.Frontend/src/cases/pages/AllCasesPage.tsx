import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import GroupSelector from "../../access-requests/components/GroupSelector";

const AllCasesPage = () => {
  return (
    <Row className="justify-content-between">
      <Col xs={12} sm={12} lg={2} className="mb-5">
        <GroupSelector />
      </Col>
      <Col xs={12} sm={12} md={12} lg={10}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default AllCasesPage;
