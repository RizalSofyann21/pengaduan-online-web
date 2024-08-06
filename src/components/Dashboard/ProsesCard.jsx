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
import axios from "axios";
// import CountUp from "react-countup";

const { Title } = Typography;

const ProsesCard = () => {
  const [pengaduan, setPengaduan] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/pengaduan`)
      .then((result) => setPengaduan(result.data))
      .catch((err) => console.log(err));
  }, []);

  // Tugas tersedia
  const pending = () => {
    const task = tasks.map((task) => {
      const length = task.tasks.filter(
        (task) => task.status === "pending"
      ).length;
      return length;
    });
    const sum = task.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };

  // tugas selesai
  const ditolak = () => {
    const task = tasks.map((task) => {
      const length = task.tasks.filter((task) => task.status === "done").length;
      return length;
    });
    const sum = task.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };

  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <div className="pengaduanKiri">
      <div className="cardProses">
        <Card style={{ minWidth: "290px", maxHeight: "170px" }}>
          <ClockCircleTwoTone style={{ fontSize: "1.5em" }} />
          <Title level={4} style={{ marginTop: "10px", fontWeight: "bold" }}>
            Pending
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
            Ditolak
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
            Diproses
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
            Selesai
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

export default ProsesCard;
