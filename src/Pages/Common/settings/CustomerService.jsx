import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const CustomerService = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleOnSave = () => {
    console.log("Saved PP");
  };
 
  return (
    <div
      className=" min-h-[90vh]  rounded-xl bg-white"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-secondary-color w-full flex items-center p-5 mb-10   rounded-tl-xl rounded-tr-xl">
        <p className="text-2xl flex  font-semibold ">
          {/* <IoChevronBackOutline
            className="text-4xl cursor-pointer  font-semibold"
            onClick={() => window.history.back()}
          /> */}
          Customer Service
        </p>
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-full lg:w-[90%]">
          <div className="">
            <JoditEditor
              ref={editor}
              value={content}
              config={{ height: 500, theme: "light", readonly: false }}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
          <Button
            onClick={handleOnSave}
            className="w-full py-6 border !text-black !border-secondary-color hover:border-secondary-color text-xl  bg-secondary-color hover:!bg-secondary-color font-semibold rounded-2xl mt-8"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CustomerService;
