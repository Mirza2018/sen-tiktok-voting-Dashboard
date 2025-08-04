import { Form } from "antd";
import { TimePicker } from "antd";
import { DatePicker } from "antd";
import { Button } from "antd";
import dayjs from "dayjs";
import React from "react";
import { toast } from "sonner";
import {
  useTimmerGetQuery,
  useTimmerSetMutation,
} from "../../redux/api/adminApi";
import { useEffect } from "react";

const Timer = () => {
  const [createTimmer] = useTimmerSetMutation();
  const { data } = useTimmerGetQuery();

  const [form] = Form.useForm();  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        battle_date: data?.data?.date ? dayjs(data?.data?.date) : null,
        battle_start_time: data?.data?.time
          ? dayjs(data?.data?.time, "HH:mm:ss")
          : null,
      });
    }
  }, [data, form]);

  const format = "HH:mm";
  const onFinish = async (values) => {
    const toastId = toast.loading("Create Timmer...");

    const formateBattleDate = dayjs(values.battle_date).format("YYYY-MM-DD");

    const formateBattleStartTime = dayjs(values.battle_start_time).format(
      "HH:mm:ss"
    );

    const data = {
      date: formateBattleDate,
      time: formateBattleStartTime,
    };

    try {
      const res = await createTimmer(data).unwrap();
      console.log(res);
      toast.success("Create Timmer Successfully", {
        id: toastId,
        duration: 2000,
      });
      form.resetFields();
      //   navigate("/admin/upcomming_vote");
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
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className="bg-secondary-color w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p className="text-3xl text-primary-color font-semibold ">Timer</p>
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

        <div
          className=" flex justify-end
                  "
        >
          <Button
            htmlType="submit"
            className="px-5 py-6 !bg-secondary-color !text-white text-xl"
          >
            Create Upcomming Timer
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Timer;
