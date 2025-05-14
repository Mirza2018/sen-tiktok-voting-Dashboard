/* eslint-disable react/prop-types */
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Modal,
  Typography,
  Upload,
} from "antd";
import { FiUpload } from "react-icons/fi";

const AddOffersForm = ({
  isAddCompanyModalVisible,
  setIsAddCompanyModalVisible,
}) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const onFinish = (values) => {
    console.log("Service User:", values);
    handleCancel();
    form.resetFields();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#E5FAE9",
            headerBg: "#E5FAE9",
          },
        },
      }}
    >
      <Modal
        open={isAddCompanyModalVisible}
        onCancel={() => setIsAddCompanyModalVisible(false)}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:!w-[700px]"
      >
        <div className="p-10 bg-[#E5FAE9]">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full text-start"
          >
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Heading
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter Heading Name",
                },
              ]}
              name="heading"
              className=" "
            >
              <Input
                placeholder="Enter Heading Name"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Description
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter Description ",
                },
              ]}
              name="desc"
              className=" "
            >
              <Input
                placeholder="Enter Description"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Valid Until
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Enter Date",
                },
              ]} 
              name="date"
              className=" "
            >
              <DatePicker
                placeholder="Enter Date"
                className="py-2 !w-full text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-3"
                htmlType="submit"
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AddOffersForm;
