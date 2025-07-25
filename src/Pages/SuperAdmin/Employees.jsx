import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

//* Modal Table
import AllEmployeesTable from "../../Components/SuperAdminPages/EmployeesPage/AllEmployeesTable";
import BlockEmployeesModal from "../../Components/SuperAdminPages/EmployeesPage/BlockEmployeesModal";
import ViewEmployeesModal from "../../Components/SuperAdminPages/EmployeesPage/ViewEmployeesModal";
import { useUserListQuery } from "../../redux/api/adminApi";

const Employees = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
  });

  const onPageChange = (page, limit) => {
    setFilters((prev) => ({
      ...prev,
      page,
      limit,
    }));
  };
  const {
    data: userList,
    currentData,
    isLoading,
    isFetching,
    isSuccess,
  } = useUserListQuery(filters);

  const handleSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: search,
    }));
  };





  const displayedData = userList ?? currentData;
  console.log(displayedData?.data);
  console.log(displayedData?.meta);

  //* Store Search Value
  const [searchText, setSearchText] = useState("");

  //* Use to set user
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  //* It's Use to Show Modal
  const [isVenueViewModalVisible, setIsVenueViewModalVisible] = useState(false);

  //* It's Use to Block Modal
  const [isVenueBlockModalVisible, setIsVenueBlockModalVisible] =
    useState(false);

  //* It's Use to Add Modal
  const [isAddVenueModalVisible, setIsAddVenueModalVisible] = useState(false);

  //* It's Use to Set Seclected User to Block and view
  const [currentVenueRecord, setCurrentVenueRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/userData.json");
        setData(response?.data); // Make sure this is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredVenueData = useMemo(() => {
    if (!searchText) return data;
    return data.filter((item) =>
      item.Name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);

  const onSearch = (value) => {
    setSearchText(value);
  };

  const showAddVenueModal = () => {
    setIsAddVenueModalVisible(true);
  };

  const showVenueViewModal = (record) => {
    setCurrentVenueRecord(record);
    setIsVenueViewModalVisible(true);
  };

  const showVenueBlockModal = (record) => {
    setCurrentVenueRecord(record);
    setIsVenueBlockModalVisible(true);
  };

  const handleCancel = () => {
    setIsVenueViewModalVisible(false);
    setIsVenueBlockModalVisible(false);
    setIsAddVenueModalVisible(false);
  };

  const handleVenueBlock = (data) => {
    console.log("Blocked Venue:", {
      id: data?.id,
      VenueName: data?.VenueName,
    });
    setIsVenueViewModalVisible(false);
    setIsVenueBlockModalVisible(false);
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="bg-secondary-color w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl  font-semibold">Users List</p>
          <div className="flex gap-4 items-center">
            <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#f3f3f3" } }}
            >
              <Input
                placeholder="Search User..."
                // value={searchText}
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                className="text-primary-color font-semibold !border-primary-color !bg-transparent py-2 !rounded-full"
                prefix={
                  <SearchOutlined className="text-primary-color font-bold text-lg mr-2" />
                }
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
      {/* <AddEmployeesModel /> */}

      {/* Table  */}
      <div className="px-10 py-10">
        <AllEmployeesTable
          data={displayedData?.data}
          loading={isLoading}
          showVenueViewModal={showVenueViewModal}
          showVenueBlockModal={showVenueBlockModal}
          meta={displayedData?.meta}
          onPageChange={onPageChange}
          pageSize={8}
        />
      </div>

      <ViewEmployeesModal
        isVenueViewModalVisible={isVenueViewModalVisible}
        handleCancel={handleCancel}
        currentVenueRecord={currentVenueRecord}
        handleVenueBlock={handleVenueBlock}
        showVenueBlockModal={showVenueBlockModal}
      />
      <BlockEmployeesModal
        isVenueBlockModalVisible={isVenueBlockModalVisible}
        handleVenueBlock={handleVenueBlock}
        handleCancel={handleCancel}
        currentVenueRecord={currentVenueRecord}
      />
    </div>
  );
};

export default Employees;
