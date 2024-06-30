import { Button, Col, Row, Space } from "antd";

const HeroSection = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} md={12}>
        <div>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "16px" }}>
            Innovative Launchpad Solution with Canto at Heart
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "32px" }}>
            Explore token sales and create your own token sale with ease.
          </p>
          <Space size="middle">
            <Button type="primary" size="large">
              Explore Token Sales
            </Button>
            <Button type="default" size="large">
              Create Token Sale
            </Button>
          </Space>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div style={{ width: "100%", height: "400px", backgroundColor: "#f0f0f0" }}>
          <img src="https://placehold.co/850x400" alt="Hero Image" />
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
