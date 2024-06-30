import { Carousel, Button, Typography } from "antd";
import PoolCard from "./PoolCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";

const { Title } = Typography;

const UpcomingPoolsCarousel = () => {
  const pools = [
    {
      name: "Project Alpha",
      isLive: true,
      isRefundable: true,
      targetedRaise: "400,000 USDT",
      tokenPrice: "0.0151 USDT",
      startDate: "31 MAY 2024, 11AM UTC",
      endDate: "12 JUNE 2024, 4PM UTC",
    },
    {
      name: "Beta Protocol",
      isLive: true,
      isRefundable: false,
      targetedRaise: "600,000 USDT",
      tokenPrice: "0.0203 USDT",
      startDate: "15 JUNE 2024, 2PM UTC",
      endDate: "30 JUNE 2024, 6PM UTC",
    },
    {
      name: "Gamma Network",
      isLive: false,
      isRefundable: true,
      targetedRaise: "250,000 USDT",
      tokenPrice: "0.0099 USDT",
      startDate: "5 JULY 2024, 9AM UTC",
      endDate: "20 JULY 2024, 11PM UTC",
    },
    {
      name: "Delta Finance",
      isLive: false,
      isRefundable: false,
      targetedRaise: "800,000 USDT",
      tokenPrice: "0.0250 USDT",
      startDate: "25 JULY 2024, 1PM UTC",
      endDate: "10 AUG 2024, 3AM UTC",
    },
  ];

  const carouselRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => carouselRef.current.prev();
  const handleNext = () => carouselRef.current.next();

  return (
    <div style={{ padding: "20px 0", position: "relative" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        Upcoming Pools
      </Title>
      <Carousel ref={carouselRef} {...settings}>
        {pools.map((pool, index) => (
          <div key={index} style={{ height: "100%" }}>
            <PoolCard pool={pool} />
          </div>
        ))}
      </Carousel>
      <Button
        icon={<LeftOutlined />}
        onClick={handlePrev}
        style={{ position: "absolute", top: "50%", left: -20, transform: "translateY(-50%)" }}
      />
      <Button
        icon={<RightOutlined />}
        onClick={handleNext}
        style={{ position: "absolute", top: "50%", right: -20, transform: "translateY(-50%)" }}
      />
    </div>
  );
};

export default UpcomingPoolsCarousel;
