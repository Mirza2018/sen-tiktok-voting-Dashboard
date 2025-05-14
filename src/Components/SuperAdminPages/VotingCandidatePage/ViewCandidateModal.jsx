/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";


const ViewCandidateModal = ({
  isVenueViewModalVisible,
  handleCancel,
  currentVenueRecord,
  handleVenueBlock,
  showVenueBlockModal,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-4xl ">Candidate Details</h2>
          <p className="text-[#989898] mt-3 text-xl">
            See all details about {currentVenueRecord?.Name}
          </p>
        </div>
      }
      open={isVenueViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[500px]"
    >
      <div className="px-5 pb-5">
      
      </div>
    </Modal>
  );
};

export default ViewCandidateModal;
