/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useUserActionMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const BlockEmployeesModal = ({
  isVenueBlockModalVisible,
  handleVenueBlock,
  handleCancel,
  currentVenueRecord,
}) => {
  const [userAction] = useUserActionMutation();
  console.log(currentVenueRecord?.status);

  const userBlock = async () => {
    const toastId = toast.loading("User is blocking...");
    const data = {
      action: "blocked",
    };

    try {
      const res = await userAction({
        data: data,
        id: currentVenueRecord?._id,
      }).unwrap();
      console.log(res);
      toast.success("User is blocked", {
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
  const userActive = async () => {
    const toastId = toast.loading("User is Unblocking...");
    const data = {
      action: "unblock",
    };

    try {
      const res = await userAction({
        data: data,
        id: currentVenueRecord?._id,
      }).unwrap();
      console.log(res);
      toast.success("User is Unblocked", {
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

          {currentVenueRecord?.status == "blocked" && (
            <Button
              className="text-xl py-5 px-8 bg-yellow-600"
              type="primary"
              onClick={userActive}
            >
              UnbLock
            </Button>
          )}

          {currentVenueRecord?.status == "active" && (
            <Button
              className="text-xl py-5 px-8"
              type="primary"
              style={{ background: "#CE0000" }}
              onClick={userBlock}
            >
              Block
            </Button>
          )}
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-center text-black">
        Do you want to{" "}
        {currentVenueRecord?.status == "blocked" ? "Unblock" : "block"} this
      </p>
    </Modal>
  );
};

export default BlockEmployeesModal;
