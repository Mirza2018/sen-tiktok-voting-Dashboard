/* eslint-disable react/prop-types */
import { Avatar, Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { getImageUrl } from "../../../redux/getBaseUrl";
import { TbTrash } from "react-icons/tb";

const AllUpcomeingVoteTable = ({
  data,
  loading,
  onPageChange,
  meta,
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
      title: "Battle Start Time",
      dataIndex: "battleStartTime",
      key: "battleStartTime",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Battle Duration",
      dataIndex: "battleTime",
      key: "battleTime",
      render: (text) => (
        <div className="flex items-center gap-2">
          <p>{text}</p>
        </div>
      ),
    },

    // {
    //   title: "Result",
    //   dataIndex: "status",
    //   key: "status",
    //   render: (text) => (
    //     <div className="flex items-center gap-2">
    //       <p
    //         className={`font-medium  px-2 rounded-md ${
    //           text == "ongoing" ? " bg-yellow-400" : "bg-green-400"
    //         }`}
    //       >
    //         {text == "ongoing" ? "ongoing" : "Complete"}
    //       </p>
    //     </div>
    //   ),
    // },
    {
      title: "Participates",
      dataIndex: "participates",
      key: "participates",
      render: (text) => (
        <div>
          {/*  {
              console.log(p?.candidateInfo?.name);
            } */}
          {text.map((p) => (
            <div className="flex items-center gap-2 mt-2">
              <Avatar
                size={36}
                src={getImageUrl() + p?.candidateInfo?.profileImage}
              />
              <p>{p?.candidateInfo?.name}</p>
            </div>
          ))}
        </div>
      ),
    },
    // {
    //   title: "Winner Vote",
    //   dataIndex: "winnerVotes",
    //   key: "winnerVotes",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            {/* View Details Tooltip */}
            <Tooltip placement="right" title="View Details">
              <Button
                className="!p-0 text-red-500"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                }}
                onClick={() => showCompanyViewModal(record?._id)}
              >
                <TbTrash style={{ fontSize: "24px" }} />
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

export default AllUpcomeingVoteTable;
