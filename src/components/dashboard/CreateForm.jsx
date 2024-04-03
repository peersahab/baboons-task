import { Form, Input, Button, Row, Col, DatePicker, InputNumber } from 'antd';
import { useCreateContext } from '../../context/CreateContext.jsx';
const CreateForm = () => {

  const { updateData, toggleForm } = useCreateContext();
  const onFinish = (values) => {
    updateData({ ...values, key: values.tokenName });
    toggleForm(false);
  };

  return (
    <Form
      name="create_form"
      layout="vertical"
      onFinish={onFinish}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="amount"
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <InputNumber style={{ width: '100%' }} size="large" placeholder="Amount" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="price"
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <InputNumber style={{ width: '100%' }} size="large" placeholder="Price" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="walletAddress"
        rules={[{ required: true, message: 'Please enter the wallet address' }]}
      >
        <Input size="large" placeholder="Wallet Address" />
      </Form.Item>
      <Form.Item
        name="tokenName"
        rules={[{ required: true, message: 'Please enter the token name' }]}
      >
        <Input size="large" placeholder="Token Name" />
      </Form.Item>
      <Form.Item
        name="tokenAddress"
        rules={[{ required: true, message: 'Please enter the token address' }]}
      >
        <Input size="large" placeholder="Token Address" />
      </Form.Item>
          <Form.Item
            name="time"
            rules={[{ required: true, message: 'Please enter the close time' }]}
          >
            <DatePicker.RangePicker size="large"  showTime style={{ width: '100%' }} />
          </Form.Item>
      <Form.Item>
        <Button style={{ width: '100%' }} size="large" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
      <Button style={{ width: '100%' }} size="large" type="primary" danger onClick={() => toggleForm(false)}>
        Cancel
      </Button>
    </Form>
  );
};

export default CreateForm;
