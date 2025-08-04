/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useDeleteVoteMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const UpcomingVoteDelete = ({
  isCompanyViewModalVisible,
  handleCancel,
  currentCompanyRecord,
  handleCompanyBlock,
}) => {
  // console.log(currentCompanyRecord);
  const [deleteBattle] = useDeleteVoteMutation();
  // console.log(currentCompanyRecord);

  const userDelete = async () => {
    const toastId = toast.loading("Battle is deleteing...");

    try {
      const res = await deleteBattle(currentCompanyRecord?._id).unwrap();
      console.log(res);
      toast.success("Battle is deleted", {
        id: toastId,
        duration: 2000,
      });
      handleCancel();
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message || "There is an problem ,please try later",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-4xl ">Do you want to delete this Battle?</h2>
        </div>
      }
      open={isCompanyViewModalVisible}
      onCancel={handleCancel}
      centered
      footer={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
            marginTop: "30px",
          }}
        >
          <Button
            className="text-xl py-5 px-8 !text-black"
            type="primary"
            onClick={handleCancel}
            style={{
              marginRight: 12,
              background: "rgba(221, 221, 221, 1)",
            }}
          >
            Cancel
          </Button>

          <Button
            className="text-xl py-5 px-8"
            type="primary"
            style={{ background: "#CE0000" }}
            onClick={userDelete}
          >
            Delete
          </Button>
        </div>
      }
      style={{ textAlign: "center" }}
      className="lg:!w-[600px]"
    >
      <div></div>
    </Modal>
  );
};

export default UpcomingVoteDelete;
