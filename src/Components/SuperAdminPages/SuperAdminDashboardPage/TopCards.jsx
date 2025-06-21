import React from "react";
import { TopCardIcons } from "../../../../public/images/AllImages";

const TopCards = ({ data }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 lg:gap-5 mb-5">
      {/* Earning  */}
      <div className="flex bg-white border border-secondary-color gap-5 flex-wrap rounded-lg py-2 px-1 lg:p-5 items-center justify-center flex-1 text-secondary-color">
        <div className="flex gap-2 xl:gap-4 items-center ">
          <img src={TopCardIcons.totalEarning} className="h-14 w-12" alt="" />

          <div className="text-center w-fit">
            <p className="text-sm lg:text-base xl:text-2xl font-bold ">
              € {data?.totalEarning.toFixed(2)}
            </p>
            <p className="text-xs lg:text-sm xl:text-base  mb-1 ">
              Total Earning
            </p>
          </div>
        </div>
      </div>
      {/* Total Passenger  */}
      <div className="flex bg-white border border-secondary-color gap-5 flex-wrap rounded-lg py-2 px-1 lg:p-5 items-center justify-center flex-1 text-secondary-color">
        <div className="flex gap-2 xl:gap-4 items-center ">
          <img src={TopCardIcons.totalPassenger} className="h-14 w-12" alt="" />

          <div className="text-center w-fit">
            <p className="text-sm lg:text-base xl:text-2xl font-bold ">
              {data?.totalUser}
            </p>
            <p className="text-xs lg:text-sm xl:text-base  mb-1 ">
              Total Users
            </p>
          </div>
        </div>
      </div>
      {/* Total Driver  */}
      <div className="flex bg-white border border-secondary-color gap-5 flex-wrap rounded-lg py-2 px-1 lg:p-5 items-center justify-center flex-1 text-secondary-color">
        <div className="flex gap-2 xl:gap-4 items-center ">
          <img src={TopCardIcons.totalDriver} className="h-14 w-12" alt="" />

          <div className="text-center w-fit">
            <p className="text-sm lg:text-base xl:text-2xl font-bold ">
              {" "}
              {data?.totalVoting}
            </p>
            <p className="text-xs lg:text-sm xl:text-base  mb-1 ">
              Total Voteing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
