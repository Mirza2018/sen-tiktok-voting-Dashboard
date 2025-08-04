import { useState } from "react";

//* Modal Table
import AllUpcomeingVoteTable from "../../Components/SuperAdminPages/PassengersPage/AllUpcomeingVoteTable";
import UpcomingVoteDelete from "../../Components/SuperAdminPages/PassengersPage/UpcomingVoteDelete";
import { useUpcomingVoteQuery } from "../../redux/api/adminApi";
import EditUpcommingBattle from "../../Components/SuperAdminPages/PassengersPage/EditUpcommingBattle";

const UpcomingVote = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    sort: "-battleStartDate",
  });

  const onPageChange = (page, limit) => {
    setFilters((prev) => ({
      ...prev,
      page,
      limit,
    }));
  };
  const { data, isLoading } = useUpcomingVoteQuery(filters);

  //* It's Use to Show Modal
  const [isCompanyViewModalVisible, setIsCompanyViewModalVisible] =
    useState(false);
  const [isEdit, setIsEdit] = useState(false);

  //* It's Use to Set Seclected User to Block and view
  const [currentCompanyRecord, setCurrentCompanyRecord] = useState(null);

  const showCompanyViewModal = (record) => {
    setCurrentCompanyRecord(record);
    setIsCompanyViewModalVisible(true);
  };
  const showEditModal = (record) => {
    setIsEdit(true);
    setCurrentCompanyRecord(record);
  };

  const showCompanyBlockModal = (record) => {
    setCurrentCompanyRecord(record);
  };

  const handleCancel = () => {
    setIsCompanyViewModalVisible(false);
    setIsEdit(false);
  };

  const handleCompanyBlock = (data) => {
    console.log("Blocked Company:", {
      id: data?.id,
      companyName: data?.companyName,
    });
    setIsCompanyViewModalVisible(false);
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="bg-secondary-color w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Voting List</p>
          {/* <div className="flex gap-4 items-center">
            <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#f3f3f3" } }}
            >
              <Input
                placeholder="Search Passengers..."
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
                className="text-primary-color font-semibold !border-primary-color !bg-transparent py-2 !rounded-full"
                prefix={
                  <SearchOutlined className="text-primary-color font-bold text-lg mr-2" />
                }
              />
            </ConfigProvider>
          </div> */}
        </div>
      </div>

      {/* Table  */}
      <div className="px-10 py-10">
        <AllUpcomeingVoteTable
          data={data?.data?.result}
          meta={data?.data?.meta}
          loading={isLoading}
          showCompanyViewModal={showCompanyViewModal}
          showCompanyBlockModal={showCompanyBlockModal}
          showEditModal={showEditModal}
          onPageChange={onPageChange}
        />
      </div>

      <UpcomingVoteDelete
        isCompanyViewModalVisible={isCompanyViewModalVisible}
        handleCancel={handleCancel}
        currentCompanyRecord={currentCompanyRecord}
        handleCompanyBlock={handleCompanyBlock}
      />
      <EditUpcommingBattle
        isEdit={isEdit}
        handleCancel={handleCancel}
        currentCompanyRecord={currentCompanyRecord}
      />
    </div>
  );
};

export default UpcomingVote;
