// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import ProsesCard from "../components/Dashboard/ProsesCard";
import KategoriCard from "../components/Dashboard/KategoriCard";
import "../styles/Dashboard.css";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title">
        <Title
          level={2}
          style={{
            textAlign: "Left",
            paddingTop: "0px",
            marginTop: "0px",
            marginBottom: "24px",
          }}
        >
          Dashboard
        </Title>
      </div>
      <div className="wrapper">
        <ProsesCard />
        <KategoriCard />
        {/* <List /> */}
      </div>
    </div>
  );
};

export default Dashboard;
