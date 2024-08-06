// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Space, Table } from "antd";
import axios from "axios";

const { Column } = Table;

const PengaduanList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pengaduan") // Ganti dengan URL backend Anda
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error saat mengambil data pengaduan:", error);
      });
  }, []);

  return (
    <Table dataSource={data}>
      <Column title="Nama Pelapor" dataIndex="namaPelapor" key="nama" />
      <Column title="Tanggal" dataIndex="tgl_pengaduan" key="tgl_pengaduan" />
      <Column title="Kategori" dataIndex="masalah" key="masalah" />
      <Column title="Lokasi" dataIndex="lokasi" key="lokasi" />
      <Column title="Status" dataIndex="status" key="status" />
      <Column
        title="Aksi"
        key="action"
        // eslint-disable-next-line no-unused-vars
        render={(_, _record) => (
          <Space size="middle">
            <a>Detail</a>
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default PengaduanList;
