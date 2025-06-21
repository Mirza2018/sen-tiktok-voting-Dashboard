import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Spin,
  TimePicker,
} from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import {
  useCandidateListQuery,
  useVoteCreateMutation,
} from "../../redux/api/adminApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
//* Modal Table

const CreateVotingPage = () => {
  const { data, currentData, isLoading, isFetching, isSuccess } =
    useCandidateListQuery({
      page: 1,
      limit: 500,
    });
  const [createVote] = useVoteCreateMutation();
  const displayedData = data ?? currentData;
  // console.log(data.data);

  const format = "HH:mm";
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const transformedOptions = data?.data?.map((candidate) => ({
    label: candidate.name,
    value: candidate._id,
  }));

  const onFinish = async (values) => {
    const toastId = toast.loading("Create Voting...");
    const formateDurationTime = dayjs(values.battle_duration_minutes).format(
      "HH:mm:ss"
    );
    const formateBattleDate = dayjs(values.battle_date).format("YYYY-MM-DD");
    // const formateBattleDate = new Date(values.battle_date.$d).toISOString()
    const formateBattleStartTime = dayjs(values.battle_start_time).format(
      "HH:mm:ss"
    );
    const transformedCandidates = values.candidate.map((id) => ({
      candidateId: id,
    }));

    console.log(
      // formateDurationTime,
      formateBattleDate,
      // formateBattleStartTime,
      // transformedCandidates
    );

    // return;
    const data = {
      battleTime: formateDurationTime,
      battleStartDate: formateBattleDate,
      battleStartTime: formateBattleStartTime,
      participates: transformedCandidates,
    };

    try {
      const res = await createVote(data).unwrap();
      console.log(res);
      toast.success("Create voting Successfully", {
        id: toastId,
        duration: 2000,
      });
      form.resetFields();
      navigate("/admin/upcomming_vote");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message || "There is an problem, please try later",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  if (isLoading)
    return <Spin className="flex justify-center items-center" size="large" />;
  if (!isLoading && isFetching)
    return <Spin className="flex justify-center items-center" size="large" />;
  if (isSuccess && displayedData)
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
          form={form}
          layout="vertical"
          className=" mt-10 w-[95%] mx-auto"
          onFinish={onFinish}
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input  Battle Durartion Time !",
              },
            ]}
            label={
              <div className="text-lg font-medium">
                {" "}
                Battle Durartion Time (HH:MM)
              </div>
            }
            name="battle_duration_minutes"
            className=" "
          >
            {/* <Input
            className="placeholder:text-secondary-color placeholder:text-xl py-3"
            placeholder="Battle duration minutes"
          /> */}
            {/* <TimePicker className="w-full" /> */}
            <TimePicker className="w-full" format={format} />
          </Form.Item>
          <div className="flex justify-between gap-5">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input Battle Start Date !",
                },
              ]}
              label={
                <div className="text-lg font-medium"> Battle Start Date</div>
              }
              name="battle_date"
              className=" w-full"
            >
              <DatePicker formTarget="" className="w-full" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input Battle Start Time!",
                },
              ]}
              label={
                <div className="text-lg font-medium">
                  {" "}
                  Battle Start Time (HH:MM)
                </div>
              }
              name="battle_start_time"
              className="w-full "
            >
              <TimePicker className="w-full" format={format} />
            </Form.Item>
          </div>
          <div className="flex justify-center">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input Battle Participate candidate!",
                },
              ]}
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
                options={transformedOptions}
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
