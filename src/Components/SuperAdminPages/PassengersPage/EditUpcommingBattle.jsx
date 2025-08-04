/* eslint-disable react/prop-types */
import { Button, Modal, Tooltip } from "antd";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import {
  useCandidateListQuery,
  useDeleteVoteMutation,
  useUpdateVotingMutation,
} from "../../../redux/api/adminApi";
import { toast } from "sonner";
import { Form } from "antd";
import { InputNumber } from "antd";
import { TimePicker } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import dayjs from "dayjs";

const EditUpcommingBattle = ({
  isEdit,
  handleCancel,
  currentCompanyRecord,
}) => {
  const [updateVote] = useUpdateVotingMutation();
  const [form] = Form.useForm();

  useEffect(() => {
    if (currentCompanyRecord) {
      const candidateId = currentCompanyRecord?.participates.map(
        (item) => item.candidateId
      );
      const timeString = currentCompanyRecord?.battleTime; // e.g., "49:15:30"

      const [hours, minutes, seconds] = timeString.split(":").map(Number);

      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      const days = Math.floor(totalSeconds / (24 * 3600));

      const remainingSeconds = totalSeconds % (24 * 3600);
      const hh = String(Math.floor(remainingSeconds / 3600)).padStart(2, "0");
      const mm = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(
        2,
        "0"
      );
      const ss = String(remainingSeconds % 60).padStart(2, "0");
      const time = `${hh}:${mm}:${ss}`;
      console.log("Days:", days);
      console.log("Time:", time);

      form.setFieldsValue({
        battle_duration_days: days,
        battle_duration_minutes: time ? dayjs(time, "HH:mm:ss") : null,
        battle_date: dayjs(currentCompanyRecord?.battleStartDate),
        candidate: candidateId,
        // battle_duration_days: currentCompanyRecord?.battle_duration_days,
        battle_start_time: currentCompanyRecord.battleStartTime
          ? dayjs(currentCompanyRecord.battleStartTime, "HH:mm:ss")
          : null,
      });
    }
  }, [currentCompanyRecord, form, isEdit]);
  // console.log(currentCompanyRecord);

  console.log(currentCompanyRecord);
  const { data, currentData, isLoading, isFetching, isSuccess } =
    useCandidateListQuery({
      page: 1,
      limit: 500,
    });

  const displayedData = data ?? currentData;
  const transformedOptions = displayedData?.data?.map((candidate) => ({
    label: candidate.name,
    value: candidate._id,
  }));

  const format = "HH:mm";
  const editVote = async (values) => {
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

    try {
      const res = await updateVote({
        data,
        id: currentCompanyRecord?._id,
      }).unwrap();
      console.log(res);
      toast.success("Create voting Successfully", {
        id: toastId,
        duration: 2000,
      });
      form.resetFields();
      handleCancel();
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

  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-4xl "> Edit Votting Deatils</h2>
        </div>
      }
      loading={isLoading}
      open={isEdit}
      onCancel={handleCancel}
      centered
      footer={[]}
      style={{ textAlign: "center" }}
      className="lg:!w-[700px]"
    >
      <Form
        form={form}
        layout="vertical"
        className=" mt-10 w-[95%] mx-auto"
        onFinish={editVote}
      >
        <div className="flex justify-between items-end gap-5">
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input Battle Durartion Days",
              },
            ]}
            label={
              <div className="text-lg font-medium"> Battle Durartion Days</div>
            }
            name="battle_duration_days"
            className=" w-full"
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
        <div className="flex justify-between items-end gap-5">
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
            Update voting
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditUpcommingBattle;
