import React, { useEffect, useState } from "react";
import TopCards from "../../Components/SuperAdminPages/SuperAdminDashboardPage/TopCards";
import UserRatioLineChart from "../../Components/SuperAdminPages/SuperAdminDashboardPage/UserRatioLineChart";
import { Link } from "react-router-dom";
import RecentActivity from "../../Components/SuperAdminPages/SuperAdminDashboardPage/RecentActivity";
import RecentUserTable from "../../Components/SuperAdminPages/SuperAdminDashboardPage/RecentUserTable";
import axios from "axios";
import { useTotaCountQuery } from "../../redux/api/adminApi";
 
const SuperAdminDashboard = () => {
  const { data, currentData, isLoading, isFetching, isSuccess } =
    useTotaCountQuery();

  const displayedData = data ?? currentData;
  console.log(displayedData?.data);
  

  const [recentUserData, setRecentUserData] = useState([]);
  const [recentUserLoading, setRecentUserLoading] = useState(true);

  useEffect(() => {
    const fetchRecentUserData = async () => {
      try {
        const response = await axios.get("/data/recentUser.json");

        setRecentUserData(response?.data);
      } catch (error) { 
        console.error("Error fetching data:", error);
      } finally {
        setRecentUserLoading(false);
      }
    };

    fetchRecentUserData();
  }, []);
  console.log(recentUserData);

  return (
    <>
      <div className="xl:col-span-2">
        <TopCards data={displayedData?.data} />
        <div
          className="w-full h-fit py-5 rounded-xl"
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
        >
          <div className="flex items-center gap-5 mb-5 w-[97%] mx-auto">
            <h1 className="text-lg font-semibold">Users ratio</h1>
            <div className="flex items-center gap-1">
              <div className="bg-secondary-color w-4 h-4 rounded-full"></div>
              <p className="text-sm font-medium">User</p>
            </div>
            {/* <div className="flex items-center gap-1">
                <div className="bg-[#B4B8BD] w-4 h-4 rounded-full"></div>
                <p className="text-sm font-medium">Driver</p>
              </div> */}
          </div>
          <UserRatioLineChart />
        </div>
      </div>
      {/* <RecentActivity /> */}

      <div className="grid  gap-5 items-stretch">
        {/* Recent User table  */}
        {/* <div className="xl:col-span-2">
          <div className="mt-5 xl:mt-10 rounded">
            <div className="flex-1">
              <div className="flex justify-between items-center mx-3 py-2">
                <p className="text-2xl mb-2 font-bold text-input-color">
                  Recent All Users
                </p>
              </div>

              <RecentUserTable
                data={recentUserData}
                loading={recentUserLoading}
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SuperAdminDashboard;
