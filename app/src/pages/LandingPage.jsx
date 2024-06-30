import { Divider, Space } from "antd";
import { FAQsSection, HeroSection, UpcomingPoolsCarousel } from "../components/Landing";

const LandingPage = () => {
  return (
    <div>
      <Space
        direction="vertical"
        size="large"
        style={{
          width: "100%",
        }}
      >
        <HeroSection />
        <Divider />
        <UpcomingPoolsCarousel />
        <Divider />
        <FAQsSection />
      </Space>
    </div>
  );
};

export default LandingPage;
