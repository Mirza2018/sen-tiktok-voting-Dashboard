import { Button, Form, Select } from "antd";
import { useState } from "react";

//* Modal Table

const CreateVotingPage = () => {
  //* Store Search Value
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="bg-secondary-color w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl text-primary-color font-semibold">
            Create Voting battle
          </p>
          {/* <div className="flex gap-4 items-center">
            <ConfigProvider
              theme={{ token: { colorTextPlaceholder: "#f3f3f3" } }}
            >
              <Input
                placeholder="Search User..."
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
                className="font-semibold !border-primary-color !placeholder:text-secondary-color !bg-white text-secondary-color py-2 !rounded-full"
                prefix={
                  <SearchOutlined className="text-secondary-color font-bold text-lg mr-2" />
                }
              />
            </ConfigProvider>
          </div> */}
        </div>
      </div>
      <Form className=" mt-10 " onFinish={onFinish}>
        <div className="flex justify-center">
          <Form.Item name="candidate" className=" !w-[80%] ">
            <Select
              placeholder="Please select candidates"
              className=" !w-full !h-[60px]"
              // value={selectedItems}
              mode="multiple"
              tokenSeparators={[","]}
              options={options}
            />
          </Form.Item>
        </div>
        <div
          className=" flex justify-end
        w-[90%]"
        >
          <Button
            htmlType="submit"
            className="px-5 py-6 !bg-green-500 !text-white text-xl"
          >
            Create voting battle
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateVotingPage;

const options = [
  { value: "shakilaparvin", label: "Shakila Parvin" },
  { value: "raisajahan", label: "Raisa Jahan" },
  { value: "awhidafridi", label: "Awhid Afridi" },
  { value: "noureenafrosepiya", label: "Noureen Afrose Piya" },
  { value: "sarahkhan", label: "Sarah Khan" },
  { value: "imranali", label: "Imran Ali" },
  { value: "farihaiqbal", label: "Fariha Iqbal" },
  { value: "tariqhassan", label: "Tariq Hassan" },
  { value: "johnsmith", label: "John Smith" },
  { value: "laracroft", label: "Lara Croft" },
  { value: "danielcraig", label: "Daniel Craig" },
  { value: "emmawatson", label: "Emma Watson" },
  { value: "jacobmurphy", label: "Jacob Murphy" },
  { value: "sophialoren", label: "Sophia Loren" },
  { value: "leonardodicaprio", label: "Leonardo DiCaprio" },
  { value: "natalieportman", label: "Natalie Portman" },
];
