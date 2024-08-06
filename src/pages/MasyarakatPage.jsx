// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Space, Table } from "antd";
import axios from "axios";

const { Column } = Table;

const MasyarakatList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/masyarakat") // Ganti dengan URL backend Anda
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error saat mengambil data masyarakat:", error);
      });
  }, []);

  return (
    <Table dataSource={data}>
      <Column title="Nama" dataIndex="nama" key="nama" />
      <Column title="NIK" dataIndex="nik" key="nik" />
      <Column title="Alamat" dataIndex="alamat" key="alamat" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Password" dataIndex="password" key="password" />
      <Column
        title="Aksi"
        key="action"
        // eslint-disable-next-line no-unused-vars
        render={(_, _record) => (
          <Space size="middle">
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default MasyarakatList;
