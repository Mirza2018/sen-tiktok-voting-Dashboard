/* eslint-disable react/prop-types */
import { Button, Space, Table, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Person } from "../../../../public/images/AllImages";
import { BiEdit } from "react-icons/bi";
import { getImageUrl } from "../../../redux/getBaseUrl";

const VoatingCandidateTable = ({
  data,
  loading,
  showVenueViewModal,
  showVenueBlockModal,
  pageSize = 0,
  meta,
  onPageChange,
}) => {
  const columns = [
    {
      title: "SI",
      dataIndex: "si",
      key: "si",
      responsive: ["md"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <img
            src={getImageUrl() + record?.profileImage}
            alt={record?.name}
            className="w-8 h-8 rounded-full"
          />
          <p>{record?.name}</p>
          {/* {console.log(getImageUrl() + record?.profileImage)} */}
        </div>
      ),
    },

    {
      title: "Followers",
      dataIndex: "followers",
      key: "followers",
    },
    {
      title: "Account Link",
      dataIndex: "tikTokLink",
      key: "tikTokLink",
    },
    {
      title: "Bio",
      dataIndex: "bio",
      key: "bio",
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
                <BiEdit style={{ fontSize: "28px" }} />
              </Button>
            </Tooltip>
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

            {/* View Details Tooltip */}
            <Tooltip placement="right" title="View Details">
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

export default VoatingCandidateTable;
