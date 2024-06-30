import { Card, Typography, Button, Divider, Space, Tag } from "antd";
import { DollarCircleOutlined, PictureOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const PoolCard = ({ pool }) => (
  <Card
    hoverable
    style={{
      margin: "10px",
      borderRadius: 10,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
    bodyStyle={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Space direction="vertical" size="middle" style={{ width: "100%", height: "100%" }}>
      <div>
        <Space>
          {pool.isLive && <Tag color="red">LIVE</Tag>}
          {pool.isRefundable && <Tag color="blue">REFUNDABLE</Tag>}
        </Space>
        <Title level={3} style={{ margin: "8px 0" }}>
          {pool.name}
        </Title>
      </div>

      <Card style={{ backgroundColor: "#f5f5f5", borderRadius: 10 }}>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <DollarCircleOutlined style={{ fontSize: 32 }} />
          <Title level={4} style={{ margin: 0 }}>
            {pool.targetedRaise}
          </Title>
          <Text type="secondary">Targeted Raise</Text>
        </Space>
      </Card>

      <div>
        <Text type="secondary">Token Price</Text>
        <Title level={5} style={{ margin: "4px 0" }}>
          {pool.tokenPrice}
        </Title>
      </div>

      <Space direction="vertical" style={{ width: "100%" }}>
        <div>
          <Text type="secondary">Start Date</Text>
          <Title level={5} style={{ margin: "4px 0" }}>
            {pool.startDate}
          </Title>
        </div>
        <div>
          <Text type="secondary">End Date</Text>
          <Title level={5} style={{ margin: "4px 0" }}>
            {pool.endDate}
          </Title>
        </div>
      </Space>

      <Button type="primary" size="large" block style={{ marginTop: "auto" }}>
        Participate
      </Button>
    </Space>
  </Card>
);

export default PoolCard;
