/* eslint-disable react/prop-types */
import { Avatar, Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { getImageUrl } from "../../../redux/getBaseUrl";
import { TbTrash } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import dayjs from "dayjs";

const AllUpcomeingVoteTable = ({
  data,
  loading,
  onPageChange,
  meta,
  showCompanyViewModal,
  showEditModal,
  showCompanyBlockModal,
  pageSize = 0,
}) => {
  // console.log(data);

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
      render: (text) => {
        const myDate = new Date("2025-08-25T00:00:00.000Z");
       const realdate= myDate.setDate(myDate.getDate() + 1);
   
        
        return (
          <div className="flex items-center gap-2">
            <p>{dateFunction(realdate)}</p>
            {/* <p>{medate}</p> */}
          </div>
        );},
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
            <div key={p?._id} className="flex items-center gap-2 mt-2">
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
            <Tooltip placement="right" title="Edit Vote">
              <Button
                className="!p-0 text-blue-600"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                }}
                onClick={() => showEditModal(record)}
              >
                {/* <CiEdit /> */}
                <FaEdit style={{ fontSize: "24px" }} />
              </Button>
            </Tooltip>
            <Tooltip placement="right" title="Delete Vote">
              <Button
                className="!p-0 text-red-500"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                }}
                onClick={() => showCompanyViewModal(record)}
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
