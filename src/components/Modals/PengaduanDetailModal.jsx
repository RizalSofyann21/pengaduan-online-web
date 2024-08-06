import React, { useState } from "react";
import { Modal, Button, Descriptions, Select, Form } from "antd";

const { Option } = Select;

// eslint-disable-next-line react/prop-types
const ComplaintDetailModal = ({ visible, onClose, complaint }) => {
  // eslint-disable-next-line react/prop-types
  const [status, setStatus] = useState(complaint.status);

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handleUpdateStatus = () => {
    // Tambahkan logika untuk mengupdate status di database
    console.log("Status updated to:", status);
    onClose();
  };

  return (
    <Modal
      title="Detail Pengaduan"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="update" type="primary" onClick={handleUpdateStatus}>
          Update Status
        </Button>,
      ]}
    >
      <Descriptions bordered>
        <Descriptions.Item label="ID Pengaduan">
          {complaint.id}
        </Descriptions.Item>
        <Descriptions.Item label="Nama Pengadu">
          {complaint.nama}
        </Descriptions.Item>
        <Descriptions.Item label="Keterangan">
          {complaint.keterangan}
        </Descriptions.Item>
        <Descriptions.Item label="Tanggal">{complaint.date}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Select defaultValue={status} onChange={handleStatusChange}>
            <Option value="pending">Pending</Option>
            <Option value="ditolak">Ditolak</Option>
            <Option value="diproses">Diproses</Option>
            <Option value="selesai">Diproses</Option>
          </Select>
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ComplaintDetailModal;
