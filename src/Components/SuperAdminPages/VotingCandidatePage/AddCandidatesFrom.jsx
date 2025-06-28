/* eslint-disable react/prop-types */
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Typography,
  Upload,
} from "antd";
import { AllImages } from "../../../../public/images/AllImages";
import { toast } from "sonner";
import { useCandidateCreateMutation } from "../../../redux/api/adminApi";

const { TextArea } = Input;

const AddCandidatesFrom = ({
  isAddCompanyModalVisible,
  setIsAddCompanyModalVisible,
}) => {
  const [createCandidate] = useCandidateCreateMutation();
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  const onFinish = async (values) => {
    const toastId = toast.loading("Adding candidate...", {
      duration: 2000,
    });
    let data = { ...values };
    delete data.profileImage;
    delete data.backgroundImage;

    if (!values?.profileImage?.fileList[0]?.originFileObj) {
      return toast.error("Please selete the profileImage", {
        id: toastId,
        duration: 2000,
      });
    }
    if (!values?.backgroundImage?.fileList[0]?.originFileObj) {
      return toast.error("Please selete the Background Image", {
        id: toastId,
        duration: 2000,
      });
    }
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append(
      "profileImage",
      values.profileImage.fileList[0].originFileObj
    );
    formData.append(
      "backgroundImage",
      values.backgroundImage.fileList[0].originFileObj
    );

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const res = await createCandidate(formData).unwrap();
      console.log("API Response:", res);
      toast.success("Candidate successfully add", {
        id: toastId,
        duration: 2000,
      });
      form.resetFields();
      setIsAddCompanyModalVisible(false);
    } catch (error) {
      console.error("Error submitting to API:", error);
      toast.error("There is some problem, Please try later ", {
        id: toastId,
        duration: 2000,
      });
    }
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
        <div className="p-5 bg-[#fff]">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full text-start"
          >
            {/* <Typography.Title level={4} style={{ color: "#222222" }}>
              Candidate Name
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate Name",
                },
              ]}
              name="name"
              className=" "
            >
              <Input
                placeholder="Enter Candidate name"
                className=" px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item> */}

            <div className="flex gap-5 justify-between">
              <div className="w-full">
                <Typography.Title level={4} style={{ color: "#000" }}>
                  Candidate Name
                </Typography.Title>
                <Form.Item
                  name="name"
                  className=""
                  rules={[
                    {
                      required: true,
                      message: "Name is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your name"
                    className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
                  />
                </Form.Item>
              </div>
              <div className="w-full">
                <Typography.Title level={4} style={{ color: "#000" }}>
                  Candidate Email
                </Typography.Title>
                <Form.Item
                  name="email"
                  className=""
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
                  />
                </Form.Item>
              </div>
            </div>

            <div className="flex gap-5 justify-between">
              <div className="w-full">
                <Typography.Title level={4} style={{ color: "#000" }}>
                  TikTok Link
                </Typography.Title>
                <Form.Item
                  name="tikTokLink"
                  className=""
                  rules={[
                    {
                      required: true,
                      message: "TikTok Link is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your TikTok Link"
                    className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
                  />
                </Form.Item>
              </div>
              <div className="w-full">
                <Typography.Title level={4} style={{ color: "#000" }}>
                  Followers
                </Typography.Title>
                <Form.Item
                  name="followers"
                  className=""
                  rules={[
                    {
                      required: true,
                      message: "followers is Required",
                    },
                  ]}
                >
                  <Input
                    controls={false}
                    placeholder="Enter your followers"
                    className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
                  />
                </Form.Item>
              </div>
            </div>

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
              name="backgroundImage"
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

            {/* <Typography.Title level={4} style={{ color: "#222222" }}>
              TikTok Link
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Candidate TikTok Link",
                },
              ]}
              name="tikTokLink"
              className=" "
            >
              <Input
                placeholder="Enter TikTok Link"
                className=" px-3 text-xl border !border-input-color !bg-transparent "
              />
            </Form.Item> */}

            <div className="flex gap-5 justify-between">
              <div className="w-full">
                <Typography.Title level={4} style={{ color: "#fff" }}>
                  Instagram Link
                </Typography.Title>
                <Form.Item name="instagramLink" className="">
                  <Input
                    placeholder="Enter your Instagram Link"
                    className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
                  />
                </Form.Item>
              </div>
              <div className="w-full">
                <Typography.Title level={4} style={{ color: "#fff" }}>
                  Facebook Link
                </Typography.Title>
                <Form.Item name="facebookLink" className="">
                  <Input
                    placeholder="Enter your Facebook Link"
                    className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
                  />
                </Form.Item>
              </div>
            </div>

            {/* <Typography.Title level={4} style={{ color: "#222222" }}>
              Instagram Link
            </Typography.Title>
            <Form.Item
              // rules={[
              //   {
              //     required: true,
              //     message: "Please Enter Candidate instagram Link",
              //   },
              // ]}
              name="instagramLink"
              className=" "
            >
              <Input
                placeholder="Enter instagram link"
                className=" px-3 text-xl border !border-input-color !bg-transparent "
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Facebook Link
            </Typography.Title>
            <Form.Item name="facebookLink" className=" ">
              <Input
                placeholder="Enter Facebook link"
                className=" px-3 text-xl border !border-input-color !bg-transparent "
              />
            </Form.Item> */}

            {/* <Typography.Title level={4} style={{ color: "#222222" }}>
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
              <InputNumber
                controls={false}
                placeholder="Enter Candidate Followers Number"
                className=" px-3 w-full text-xl border !border-input-color !bg-transparent "
              />
            </Form.Item> */}

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
                rows={2}
                placeholder="Enter Candidate Bio"
                className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#fff" }}>
              Password
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Password is Required",
                },
              ]}
              name="password"
            >
              <Input.Password
                placeholder="Enter Candidate password"
                className="py-2 px-3 text-xl bg-site-color border !border-tok-color "
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
