/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useCandidateDeleteMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const DeleteCandidateModal = ({
  isVenueBlockModalVisible,
  handleVenueBlock,
  handleCancel,
  currentVenueRecord,
}) => {
  const [candidateDelete] = useCandidateDeleteMutation();
  // console.log(currentVenueRecord);
  const handleDelete = async () => {
    const toastId = toast.loading("Delete Candidate...");
    console.log(currentVenueRecord._id);
    try {
      const res = await candidateDelete(currentVenueRecord._id).unwrap();
      console.log(res);
      toast.success("Candidate Deleted Successfully", {
        id: toastId,
        duration: 2000,
      });
      handleCancel();
    } catch (error) {
      toast.error(
        error?.data?.message || "There is an problem , please try later",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <Modal
      // title="Confirm Delete"
      open={isVenueBlockModalVisible}
      onOk={handleVenueBlock}
      onCancel={handleCancel}
      okText="block"
      cancelText="Cancel"
      centered
      style={{ textAlign: "center" }}
      // styles.body={{ textAlign: "center" }}
      width={400}
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
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-center text-black">
        Do you want to Delete this Candidate?
      </p>
    </Modal>
  );
};

export default DeleteCandidateModal;
