/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Person } from "../../../../public/images/AllImages";


const ViewEarningModel = ({
  setIsViewEarningModalVisible,
  isViewEarningModalVisible,
  record,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-4xl ">User payment details</h2>
        </div>
      }
      open={isViewEarningModalVisible}
      onCancel={() => setIsViewEarningModalVisible(false)}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[500px]"
    >
      <div className="px-5 pb-5">
        <div className="">
          <div className="flex justify-start items-center p-4">
            {/* Avatar */}
            <img
              src={Person.passengerPic}
              alt={"pic"}
              className="w-36 h-36  rounded-lg mr-4"
            />
            <div className="text-xl sm:text-2xl font-bold w-44">Jon Doe</div>
          </div>

          <div className="mt-2">
            <div className="text-lg w-[90%] mx-auto">
              <h1 className="text-2xl font-bold text-start mb-3">
                Information
              </h1>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">User Serial:</div>
                <div>#1234</div>
              </div>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Email:</div>
                <div>wade@gmail.com</div>
              </div>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Bank Account:</div>
                <div>4646123456789</div>
              </div>

              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Time & Date:</div>
                <div>4:15 PM, 13/02/24</div>
              </div>
              <div className="sm:flex gap-1 sm:gap-2 mb-2">
                <div className="font-bold">Amount:</div>
                <div>$3.50</div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          onClick={() => setIsViewEarningModalVisible(false)}
          className="bg-secondary-color text-primary-color py-3 text-xl font-semibold rounded-lg mt-8 w-full"
        >
          Block
        </button> */}
      </div>
    </Modal>
  );
};

export default ViewEarningModel;
