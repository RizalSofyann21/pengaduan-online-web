// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Typography, Card, Statistic } from "antd";
import {
  ClockCircleTwoTone,
  CloseSquareTwoTone,
  ToolTwoTone,
  CheckSquareTwoTone,
} from "@ant-design/icons";
// import axios from "axios";
// import CountUp from "react-countup";

const { Title } = Typography;

const KategoriCard = () => {
  return (
    <div className="pengaduanKiri">
      <div className="cardKategori">
        <Card style={{ minWidth: "290px", maxHeight: "170px" }}>
          <ClockCircleTwoTone style={{ fontSize: "1.5em" }} />
          <Title level={4} style={{ marginTop: "10px", fontWeight: "bold" }}>
            Sampah
          </Title>
          <Title
            level={1}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              fontWeight: "bold",
            }}
          >
            {/* <Statistic value={taskAvailable()} formatter={formatter} /> */}
          </Title>
        </Card>

        <Card style={{ minWidth: "290px", maxHeight: "170px" }}>
          <CloseSquareTwoTone style={{ fontSize: "1.5em" }} />
          <Title level={4} style={{ marginTop: "10px", fontWeight: "bold" }}>
            Limbah B3
          </Title>
          <Title
            level={1}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              fontWeight: "bold",
            }}
          >
            {/* <Statistic value={taskTotal()} formatter={formatter} /> */}
          </Title>
        </Card>

        <Card style={{ minWidth: "290px", maxHeight: "170px" }}>
          <ToolTwoTone style={{ fontSize: "1.5em" }} />
          <Title level={4} style={{ marginTop: "10px", fontWeight: "bold" }}>
            Pencemaran air
          </Title>
          <Title
            level={1}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              fontWeight: "bold",
            }}
          >
            {/* <Statistic value={taskCompleted()} formatter={formatter} /> */}
          </Title>
        </Card>

        <Card style={{ minWidth: "290px", maxHeight: "170px" }}>
          <CheckSquareTwoTone style={{ fontSize: "1.5em" }} />
          <Title level={4} style={{ marginTop: "10px", fontWeight: "bold" }}>
            Lainnya
          </Title>
          <Title
            level={1}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              fontWeight: "bold",
            }}
          >
            {/* <Statistic value={taskCompleted()} formatter={formatter} /> */}
          </Title>
        </Card>
      </div>

      {/* <DueTask /> */}
    </div>
  );
};

export default KategoriCard;
