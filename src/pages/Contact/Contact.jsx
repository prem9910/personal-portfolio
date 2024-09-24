import { SendOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Input } from "antd";
import PageTitle from "../../components/PageTitle/PageTitle";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <PageTitle pageTitle="Contact" />
      <div>
        <Flex align="center" justify="center">
        <Form layout="vertical" className="contact-form">
          <Form.Item label="Your name" name="name">
            <Input size="large" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="Your email" name="email">
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Your message" name="message">
            <Input.TextArea
              style={{ height: "150px" }}
              size="large"
              placeholder="Type something if you want to contact me"
            />
          </Form.Item>
          <Button type="primary" icon={<SendOutlined />} htmlType="submit" className="submit-btn" size="large">
            Send Message
          </Button>
        </Form>
        </Flex>
      </div>
    </>
  );
};

export default Contact;
