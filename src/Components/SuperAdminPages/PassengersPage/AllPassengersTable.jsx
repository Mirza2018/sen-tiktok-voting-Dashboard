/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";

const AllPassengersTable = ({
  data,
  loading,
  showCompanyViewModal,
  showCompanyBlockModal,
  pageSize = 0,
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-center gap-2">
          <img
            src={Person.samplePerson}
            alt={text}
            className="w-8 h-8 rounded-full"
          />
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "#SI",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p
            className={`font-medium  px-2 rounded-md ${
              text == "complete" ? "bg-green-400" : "bg-yellow-400"
            }`}
          >
            {text == "complete" ? "complete" : "pending"}
          </p>
        </div>
      ),
    },
    {
      title: "Winner",
      dataIndex: "winner",
      key: "winner",
    },
    {
      title: "Winner Vote",
      dataIndex: "winnerVote",
      key: "winnerVote",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* View Details Tooltip */}
            <Tooltip placement="right" title="View Details">
              <Button
                className="!p-0"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  color: "#25F4EE",
                }}
                onClick={() => showCompanyViewModal(record)}
              >
                <GoEye style={{ fontSize: "24px" }} />
              </Button>
            </Tooltip>
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
        pagination={pageSize > 0 ? { pageSize } : false}
        rowKey="id"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default AllPassengersTable;
