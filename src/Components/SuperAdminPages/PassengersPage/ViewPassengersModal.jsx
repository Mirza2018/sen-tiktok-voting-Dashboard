/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  useSingleVotingResultQuery,
} from "../../../redux/api/adminApi";
import { useEffect } from "react";

const ViewPassengersModal = ({
  isCompanyViewModalVisible,
  handleCancel,
  currentCompanyRecord,
  handleCompanyBlock,
}) => {
  const { data, isError, isFetching, isLoading } =
    useSingleVotingResultQuery(currentCompanyRecord);

  console.log(data?.data)

  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-4xl ">Voting Details</h2>
        </div>
      }
      open={isCompanyViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[600px]"
    >
      <div className="px-5 pb-5">
        <div className="">
          <div className="mt-10">
            {data?.data.map((candidate) => (
              <div className="text-lg w-[90%] mx-auto grid grid-cols-3 gap-3">
                {console.log(candidate?.participates)}
                <div className="sm:flex gap-1 sm:gap-2 mb-2 col-span-2">
                  <div className="font-bold">candidate:</div>
                  <div>{candidate?.participates?.candidateName}</div>
                </div>
                <div className="sm:flex gap-1 sm:gap-2 mb-2">
                  <div className="font-bold">Votes:</div>
                  <div>{candidate?.participates?.votes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewPassengersModal;
