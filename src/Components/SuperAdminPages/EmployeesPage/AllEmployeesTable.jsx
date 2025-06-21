/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { FaUser } from "react-icons/fa";

const AllEmployeesTable = ({
  showVenueViewModal,
  showVenueBlockModal,
  pageSize = 0,
  data,
  loading,
  onPageChange,
  meta,
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-center gap-2">
          <FaUser />
          {text ? <p>{text}</p> : <p>Not Avilable</p>}
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => (
        <div className="flex items-center gap-2">
          {text ? <p>{text}</p> : <p>Not Avilable</p>}
        </div>
      ),
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <div className="flex items-center gap-2">
          {text == "active" ? (
            <p className="bg-green-500 text-white px-2 py-1 rounded-md">
              {text}
            </p>
          ) : (
            <p className="bg-red-500 text-white px-2 py-1 rounded-md">
              {text}
            </p>
          )}
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* Block User Tooltip */}
            <Tooltip placement="left" title="Block this User">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#C50000",
                }}
                onClick={() => showVenueBlockModal(record)}
              >
                <RiDeleteBin6Line style={{ fontSize: "24px" }} />
              </Button>
            </Tooltip>

            {/* <Tooltip placement="right" title="View Details">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#de8c9d",
                }}
                onClick={() => showVenueViewModal(record)}
              >
                <GoEye style={{ fontSize: "24px" }} />
              </Button>
            </Tooltip> */}
          </Space>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          current: meta?.page,
          pageSize: meta?.limit,
          total: meta?.total,
          onChange: onPageChange,
          showSizeChanger: true,
        }}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default AllEmployeesTable;
