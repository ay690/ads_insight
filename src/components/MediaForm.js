import React, { useState } from "react";
import { Form, Row, Col, Checkbox, Input, Button, Card, Select, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;


const MediaForm = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const cardStyle = {
    width: "100%",
    margin: "2em 1em",
  };
  // const cardStyleSmallMedium = {
  //   width: "100%", 
  //   margin: "auto",
  // };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigate("/checkform");
    }, 600);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const onFinish = (values) => {
    showModal();
  };

  return (
    <Card
      title="Create Text & Media"
      bodyStyle={{ maxHeight: "100vh" }}
      style={cardStyle}
      // responsive={[ 
      //   {
      //     maxWidth: 576, 
      //     style: cardStyleSmallMedium, 
      //   },
      //   {
      //     maxWidth: 768, 
      //     style: cardStyleSmallMedium, 
      //   },
      // ]}
    >
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={12}>
          <Col xl={12} sm={24} md={12}>
            <Form.Item label="Heading 01" name="heading1">
              <Input placeholder="Add a heading that would make user interested" />
            </Form.Item>

            <Form.Item label="Heading 02" name="heading2">
              <Input placeholder="Add a heading that would make user interested" />
            </Form.Item>
          </Col>
          <Col xl={12} sm={24} md={12}>
            <Form.Item label="TextArea" name="description">
              <TextArea
                rows={5}
                placeholder="Add primary text to help users understand more about your products, services or offers"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={18}>
          <Col xl={8} sm={24} md={12}>
            <Form.Item
              label="Landscape Marketing Image (1.9:1)"
              name="landscape"
            >
              <Input
                type="url"
                placeholder="Add the URL of the Image you want to use for the ad"
              />
            </Form.Item>
          </Col>
          <Col xl={8} sm={24} md={12}>
            <Form.Item label="Portrait Marketing Image (4.5)" name="portrait">
              <Input
                type="url"
                placeholder="Add the URL of the Image you want to use for the ad"
              />
            </Form.Item>
          </Col>
          <Col xl={8} sm={24} md={12}>
            <Form.Item label="Square Marketing Image (1:1)" name="square">
              <Input
                type="url"
                placeholder="Add the URL of the Image you want to use for the ad"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xl={24} sm={24} md={24}>
            <Form.Item label="Video URL" name="video">
              <Input
                type="url"
                placeholder="Add the URL of the video you want to use for the ad"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={18}>
          <Col xl={12} sm={24} md={12}>
            <Form.Item label="Business Name" name="business">
              <Input type="url" placeholder="Add your business name" />
            </Form.Item>
          </Col>
          <Col xl={12} sm={24} md={12}>
            <Form.Item label="Button Label" name="btn_label">
              <Select
                type="url"
                placeholder="Add the URL of the Landing page you want to redirect users to"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xl={24} sm={24} md={24}>
            <Form.Item label="Website URL" name="wesbite">
              <Input
                type="url"
                placeholder="Add the URL of the Landing page you want to redirect users to"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ span: 24 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link to="/checkform">
              <Button style={{ marginRight: "15px" }}>Back</Button>
            </Link>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Modal
        title="Submission Successful"
        visible={isModalVisible}
        onCancel={handleCancel}
        // footer={[
        //   <Button key="ok" type="primary" onClick={handleCancel}>
        //     OK
        //   </Button>,
        // ]}
      >
        Your form has been submitted. You will be redirected shortly.
      </Modal>
    </Card>
  );
};

export default MediaForm;
