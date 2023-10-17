import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Input,
  Select,
  Card,
  Modal,
  Switch,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import Table1 from "./Table1";
import Table2 from "./Table2";
import PieChart from "./PieChart";

const Dashboard = () => {
  const [showPieChart, setShowPieChart] = useState(false);

  const togglePieChart = () => {
    setShowPieChart(!showPieChart);
  };

  return (
    <Row gutter={8}>
      <Col xs={24} md={12} xl={12}>
        <Table1 />
      </Col>
      <Col xs={24} md={12} xl={12}>
        {showPieChart ? <PieChart /> : <Table2 />}
        <div style={{display: 'flex', justifyContent: "flex-end", padding: "20px"}} >
          <Switch checked={showPieChart} onChange={togglePieChart} style={{width: "50px"}} />
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
