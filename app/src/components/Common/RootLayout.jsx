// import { Button, Layout, theme } from "antd";
// import { Outlet, NavLink } from "react-router-dom";

// const { Header, Content, Footer } = Layout;

// const RootLayout = () => {
//   const {
//     token: { colorBgContainer, colorBgHeader, colorBgFooter, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Header
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 10,
//           display: "flex",
//           justifyContent: "space-between",
//           backgroundColor: colorBgHeader,
//         }}
//       >
//         <div className="logo">
//           <NavLink to="/">Logo</NavLink>
//         </div>
//         <div className="nav-links">
//           <NavLink to="/create-pools">Create Pools</NavLink>
//           <NavLink to="/token-sales">Token Sales</NavLink>
//           <NavLink to="/profile">Profile</NavLink>
//         </div>
//         <div className="wallet-btn">
//           <Button type="primary">Connect Wallet</Button>
//         </div>
//       </Header>
//       <Content
//         style={{
//           padding: "0 50px",
//           marginTop: 64,
//           backgroundColor: colorBgContainer,
//           borderRadius: borderRadiusLG,
//           overflow: "initial",
//         }}
//       >
//         <div
//           style={{
//             padding: 24,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <Outlet />
//         </div>
//       </Content>
//       <Footer
//         style={{
//           textAlign: "center",
//         }}
//       >
//         NoRug ©{new Date().getFullYear()} Created by PsyCodeLabs
//       </Footer>
//     </Layout>
//   );
// };

// export default RootLayout;

import { Button, Layout, theme } from "antd";
import { Outlet, NavLink } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const RootLayout = () => {
  const { token } = theme.useToken("light");
  const { colorBgContainer, colorBgHeader, colorBgFooter, borderRadiusLG, colorPrimary } = token;

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: colorBgHeader,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="logo">
          <NavLink to="/">
            {/* <img src="/logo.png" alt="Logo" style={{ height: "32px" }} /> */}
            Logo
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink
            to="/create-pools"
            style={({ isActive }) => ({
              color: isActive ? "#1890ff" : "#fff",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              marginRight: "24px",
            })}
          >
            Create Pools
          </NavLink>
          <NavLink
            to="/token-sales"
            style={({ isActive }) => ({
              color: isActive ? "#1890ff" : "#fff",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              marginRight: "24px",
            })}
          >
            Token Sales
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? "#1890ff" : "#fff",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            Profile
          </NavLink>
        </div>
        <div className="wallet-btn">
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: borderRadiusLG,
              backgroundColor: colorPrimary,
              borderColor: colorPrimary,
            }}
          >
            Connect Wallet
          </Button>
        </div>
      </Header>
      <Content
        style={{
          padding: "24px 50px",
          marginTop: 64,
          backgroundColor: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflow: "initial",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            padding: 32,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: colorBgFooter,
          padding: "16px 0",
          color: "rgba(0, 0, 0, 0.45)",
          borderTop: `1px solid ${colorBgContainer}`,
        }}
      >
        <div>NoRug ©{new Date().getFullYear()} Created by PsyCodeLabs</div>
        <div style={{ marginTop: "8px" }}>
          <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-of-service" style={{ color: "inherit", textDecoration: "none" }}>
            Terms of Service
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default RootLayout;
