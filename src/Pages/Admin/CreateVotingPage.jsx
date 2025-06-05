import { Button, DatePicker, Form, Input, Select, TimePicker } from "antd";
import { useState } from "react";

//* Modal Table

const CreateVotingPage = () => {
  let date;
  //* Store Search Value
  const onFinish = (values) => {
    const converDate = new Date(values.battle_date);

    console.log(converDate);
  };

  const myDate = new Date()
  console.log(myDate);
  

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="bg-secondary-color w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl text-primary-color font-semibold ">
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

      <Form
        layout="vertical"
        className=" mt-10 w-[95%] mx-auto"
        onFinish={onFinish}
      >
        <Form.Item
          label={<div className="text-lg font-medium"> Battle Time (min)</div>}
          name="battle_duration_minutes"
          className=" "
        >
          <Input placeholder="Battle duration minutes" />
        </Form.Item>
        <div className="flex justify-between gap-5">
          <Form.Item
            label={
              <div className="text-lg font-medium"> Battle Start Date</div>
            }
            name="battle_date"
            className=" w-full"
          >
            <DatePicker
              format="MMMM D, YYYY"
              formTarget=""
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="text-lg font-medium"> Battle Start Time</div>
            }
            name="battle_start_time"
            className="w-full "
          >
            <TimePicker className="w-full" />
          </Form.Item>
        </div>
        <div className="flex justify-center">
          <Form.Item
            label={
              <div className="text-lg font-medium">
                {" "}
                Battle Participate candidate
              </div>
            }
            name="candidate"
            className=" !w-[100%] "
          >
            <Select
              placeholder="Please select candidates"
              className=" !w-full "
              // value={selectedItems}
              mode="multiple"
              tokenSeparators={[","]}
              options={options}
            />
          </Form.Item>
        </div>
        <div
          className=" flex justify-end
        "
        >
          <Button
            htmlType="submit"
            className="px-5 py-6 !bg-secondary-color !text-white text-xl"
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
