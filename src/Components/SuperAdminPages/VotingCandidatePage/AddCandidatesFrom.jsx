/* eslint-disable react/prop-types */
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Form,
  Image,
  Input,
  Modal,
  Typography,
  Upload,
} from "antd";
import { AllImages } from "../../../../public/images/AllImages";

const { TextArea } = Input;

const AddCandidatesFrom = ({
  isAddCompanyModalVisible,
  setIsAddCompanyModalVisible,
}) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const onFinish = (values) => {
    console.log("Service User:", values);
    form.resetFields();
    setIsAddCompanyModalVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#fff",
            headerBg: "#ffff",
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
        <div className="p-10 bg-[#fff]">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full text-start"
          >
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Candidate Name
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate Name",
                },
              ]}
              name="candidateName"
              className=" "
            >
              <Input
                placeholder="Enter Candidate name"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Candidate Image
            </Typography.Title>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate Image",
                },
              ]}
              name="profileImage"
              className=" "
            >
              <Dragger name="files" maxCount={1} action={false}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </Form.Item>

            <Typography.Title
              level={4}
              style={{ color: "#222222" }}
              className="mt-5"
            >
              Candidate Background Image
            </Typography.Title>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate Background Image",
                },
              ]}
              name="profileImage"
              className=" "
            >
              <Dragger name="files" maxCount={1} action={false}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              TikTok Link
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate TikTok Link",
                },
              ]}
              name="tiktokLink"
              className=" "
            >
              <Input
                placeholder="Enter TikTok Link"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent "
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Followers
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate Followers Number",
                },
              ]}
              name="followers"
              className=" "
            >
              <Input
                placeholder="Enter Candidate Followers Number"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent "
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Bio
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate bio",
                },
              ]}
              name="bio"
              className=" "
            >
              <TextArea
                rows={4}
                placeholder="Enter Candidate Bio"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent "
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

export default AddCandidatesFrom;
