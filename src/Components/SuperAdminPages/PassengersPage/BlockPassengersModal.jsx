/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";

const BlockPassengersModal = ({
  isCompanyBlockModalVisible,
  handleCompanyBlock,
  handleCancel,
  currentCompanyRecord,
}) => {
  return (
    <Modal
      // title="Confirm Delete"
      open={isCompanyBlockModalVisible}
      onOk={handleCompanyBlock}
      onCancel={handleCancel}
      okText="block"
      cancelText="Cancel"
      centered
      style={{ textAlign: "center" }}
      // styles.body={{ textAlign: "center" }}
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
            className="text-xl py-5 px-8 !text-black font-medium"
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
            style={{ background: "#F5382C" }}
            onClick={() => handleCompanyBlock(currentCompanyRecord)}
          >
            Block
          </Button>
        </div>
      }
    >
      <p className="text-3xl font-semibold pt-10 pb-4">
        Do you want to block this Passenger?
      </p>
    </Modal>
  );
};

export default BlockPassengersModal;
