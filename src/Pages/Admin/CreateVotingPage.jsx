import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Spin,
  TimePicker,
} from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useCandidateListQuery,
  useVoteCreateMutation,
} from "../../redux/api/adminApi";
import { getImageUrl } from "../../redux/getBaseUrl";
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
  const transformedOptions = displayedData?.data?.map((candidate) => ({
    label: (
      <div className="flex items-center gap-3">
        <img
          src={getImageUrl() + candidate?.profileImage} // update this key to match your data
          // alt={candidate.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-xl">{candidate.name}</span>
      </div>
    ),
    value: candidate._id,
  }));

  const onFinish = async (values) => {
    const toastId = toast.loading("Create Voting...");
    const formateDurationTime = dayjs(values.battle_duration_minutes).format(
      "HH:mm:ss"
    );
const formateBattleDate = dayjs(values.battle_date)
  .add(1, "day")
  .format("YYYY-MM-DD");
    // const formateBattleDate = new Date(values.battle_date.$d).toISOString()
    const formateBattleStartTime = dayjs(values.battle_start_time).format(
      "HH:mm:ss"
    );
    const transformedCandidates = values.candidate.map((id) => ({
      candidateId: id,
    }));

    const battleDaysInHours = values.battle_duration_days * 24;

    const [hoursStr, minutesStr, secondsStr] = formateDurationTime.split(":");

    const totalHoursDecimal = battleDaysInHours + parseInt(hoursStr);
    const totalHours = Math.floor(totalHoursDecimal);

    // const totalSeconds = Math.round((totalMinutesDecimal - totalMinutes) * 60);

    // Format with leading zeros
    const hh = String(totalHours).padStart(2, "0");
    const ss = 0;

    const formattedTime = `${hh}:${minutesStr}:${ss}${ss}`;

    console.log(
      formattedTime

      // formateBattleStartTime,
      // transformedCandidates
    );

    const data = {
      battleTime: formattedTime,
      battleStartDate: formateBattleDate,
      battleStartTime: formateBattleStartTime,
      participates: transformedCandidates,
    };
    console.log(data);
    

    // return;
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
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          className=" mt-10 w-[95%] mx-auto"
          onFinish={onFinish}
        >
          <div className="flex justify-between gap-5">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input Battle Durartion Days",
                },
              ]}
              label={
                <div className="text-lg font-medium">
                  {" "}
                  Battle Durartion Days
                </div>
              }
              name="battle_duration_days"
              className=" w-full"
              initialValue={0}
            >
              <InputNumber
             
                controls={false}
                className="!placeholder:text-secondary-color !placeholder:text-lg w-full border !border-secondary-color !py-1"
                placeholder="0"
              />
            </Form.Item>
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
              className=" w-full"
            >
              <TimePicker className="w-full" format={format} />
            </Form.Item>
          </div>
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
