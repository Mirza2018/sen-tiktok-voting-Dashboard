/* eslint-disable react/prop-types */
import { Avatar, Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AllImages, Person } from "../../../../public/images/AllImages";
import dayjs from "dayjs";
import { getImageUrl } from "../../../redux/getBaseUrl";

const AllPassengersTable = ({
  data,
  loading,
  showCompanyViewModal,
  showCompanyBlockModal,
  pageSize = 0,
}) => {
  console.log(data);

  const dateFunction = (date) => {
    let inputDate = new Date(date);
    if (isNaN(inputDate)) {
      return "Invalid date";
    }
    return inputDate.toDateString();
  };

  const columns = [
    {
      title: "Battle Date",
      dataIndex: "battleStartDate",
      key: "battleStartDate",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p>{dateFunction(text)}</p>
        </div>
      ),
    },

    {
      title: "Result",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p
            className={`font-medium  px-2 rounded-md ${
              text == "ongoing" ? " bg-yellow-400" : "bg-green-400"
            }`}
          >
            {text == "ongoing" ? "ongoing" : "Complete"}
          </p>
        </div>
      ),
    },
    {
      title: "Winner",
      dataIndex: "winner",
      key: "winner",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Avatar size={36} src={getImageUrl() + text?.profileImage} />
          <p>{text?.name}</p>
        </div>
      ),
    },
    {
      title: "Winner Vote",
      dataIndex: "winnerVotes",
      key: "winnerVotes",
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
                onClick={() => showCompanyViewModal(record?.battleId)}
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
