/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLazySingleVotingResultQuery } from "../../../redux/api/adminApi";
import { useEffect } from "react";

const ViewPassengersModal = ({
  isCompanyViewModalVisible,
  handleCancel,
  currentCompanyRecord,
  handleCompanyBlock,
}) => {
  // const [fetchVotingResult, { data, isError, isFetching, isLoading }] =
  //   useLazySingleVotingResultQuery();

  //   useEffect(() => {
  //     if (currentCompanyRecord) {
   
  //       fetchVotingResult(currentCompanyRecord)
  //         .unwrap()
  //         .catch((err) => {
  //           console.error("Failed to fetch voting result:", err);
  //         });
  //     }
  //   }, [currentCompanyRecord, fetchVotingResult]);

console.log(currentCompanyRecord);

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
            {/* {currentCompanyRecord?.votingCandidates.map((candidate) => (
              <div className="text-lg w-[90%] mx-auto grid grid-cols-3 gap-3">
                <div className="sm:flex gap-1 sm:gap-2 mb-2 col-span-2">
                  <div className="font-bold">candidate:</div>
                  <div>{candidate?.name}</div>
                </div>
                <div className="sm:flex gap-1 sm:gap-2 mb-2">
                  <div className="font-bold">Votes:</div>
                  <div>{candidate?.vote}</div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewPassengersModal;
