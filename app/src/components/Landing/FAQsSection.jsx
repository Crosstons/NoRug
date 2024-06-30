import { Typography, Collapse, Row, Col, Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const FAQsSection = () => {
  const faqs = [
    {
      question: "What is a token launch pool?",
      answer:
        "A token launch pool is a fundraising mechanism where new cryptocurrency projects offer their tokens to early investors before they become available on public exchanges. It allows investors to purchase tokens at potentially lower prices and supports projects in raising capital.",
    },
    {
      question: "How do I participate in a pool?",
      answer:
        "To participate in a pool, you need to create an account on our platform, complete the KYC process, and ensure you have sufficient funds in your wallet. When a pool opens, you can select the amount of tokens you wish to purchase and confirm your participation.",
    },
    {
      question: "What is the difference between a refundable and non-refundable pool?",
      answer:
        "In a refundable pool, if the project doesn't meet its fundraising goal, participants can claim a refund of their investment. Non-refundable pools don't offer this option, meaning participants cannot reclaim their funds if the pool is unsuccessful.",
    },
    {
      question: "How are token prices determined?",
      answer:
        "Token prices are set by the project teams based on various factors including market conditions, project valuation, and long-term tokenomics. Our platform ensures that the pricing is fair and transparent for all participants.",
    },
    {
      question: "When do I receive my tokens after participating?",
      answer:
        "Token distribution typically occurs after the pool closes and all necessary checks are completed. The exact timing can vary by project and will be clearly communicated in the pool details. Usually, tokens are distributed within a few days to a week after the pool ends.",
    },
    {
      question: "Are there any fees for participating in pools?",
      answer:
        "While our platform doesn't charge direct fees for participation, there may be network fees (gas fees) associated with transactions on the blockchain. These fees go to the network operators, not to our platform.",
    },
  ];

  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={18} lg={16} xl={14}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
          Frequently Asked Questions
        </Title>
        <Collapse bordered={false} expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}>
          {faqs.map((faq, index) => (
            <Panel header={<Title level={5}>{faq.question}</Title>} key={index} style={{ borderRadius: 8 }}>
              <Card bordered={false}>
                <Paragraph>{faq.answer}</Paragraph>
              </Card>
            </Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  );
};

export default FAQsSection;
