/* eslint-disable react/prop-types */
import { ConfigProvider, Table } from "antd";
import { Person } from "../../../../public/images/AllImages";

const columns = [
  {
    title: "#SI",
    dataIndex: "id",
    key: "id",
    render: (text) => `#${text}`,
    responsive: ["md"],
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => (
      <div className="flex justify-center items-center gap-2">
        {" "}
        <img src={Person.samplePerson} alt="" /> <p className="">{text}</p>
      </div>
    ),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Joining Date",
    dataIndex: "joiningDate",
    key: "joiningDate",
  },
  {
    title: "User Type",
    dataIndex: "userType",
    key: "userType",
    filters: [
      {
        text: "Driver",
        value: "Driver",
      },
      {
        text: "Passenger",
        value: "Passenger",
      },
    ],
    onFilter: (value, record) => record.userType.indexOf(value) === 0,
  },
];

const RecentUserTable = ({ data, loading }) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#de8c9d",
              colorBgContainer: "#FDFDFD",
              colorText: "#0C0C0C",
              borderColor: "#DFE1E3",
              headerColor: "#0C0C0C",
              fontSize: 18,
              footerColor: "#FDFDFD",
              // headerSplitColor: "rgb(253,253,253)",
              // marginXXS: 4,
              colorLinkActive: "#FDFDFD",
              headerSplitColor: "#de8c9d",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={false}
          scroll={{ x: true }}
          // style={{ boxShadow: "0px 0px 5px 1px #00000040" }}
        />
      </ConfigProvider>
    </div>
  );
};

export default RecentUserTable;
