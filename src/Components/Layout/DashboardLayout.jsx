import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import Topbar from "../Shared/Topbar";
import { AllIcons, AllImages } from "../../../public/images/AllImages";
import TopLoadingBar from "react-top-loading-bar";

const DashboardLayout = () => {
  const userRole = JSON.parse(localStorage.getItem("home_care_user"));
  const location = useLocation();
  const pathSegment = location.pathname.split("/").pop();
  const currentPath = location.pathname;

  // Logic to set active keys
  const activeKeys = (() => {
    if (currentPath.includes("/dashboard")) return ["dashboard"];
    if (currentPath.includes("/users")) return ["users"];
    if (currentPath.includes("/voting_result")) return ["voting_result"];
    if (currentPath.includes("/voting_candidate")) return ["voting_candidate"];
    if (currentPath.includes("/create_voting")) return ["create_voting"];
    if (currentPath.includes("/earnings")) return ["earnings"];
    if (currentPath.includes("/offers")) return ["offers"];
    if (currentPath.includes("/notification")) return ["notification"];
    return [currentPath.split("/")[1]];
  })();

  const activeOtherKeys = (() => {
    if (
      currentPath.includes("/profile") ||
      currentPath.includes("/edit-profile")
    ) {
      return ["profile"];
    }
    if (
      currentPath.includes("/change-password") ||
      currentPath.includes("/forgot-password") ||
      currentPath.includes("/otp-page") ||
      currentPath.includes("/update-password")
    ) {
      return ["change-password"];
    }
    if (currentPath.includes("/faq")) return ["faq"];
    if (currentPath.includes("/safety")) return ["safety"];
    if (currentPath.includes("/terms-and-condition"))
      return ["terms-and-condition"];
    if (currentPath.includes("/customer-service")) return ["customer-service"];
    if (currentPath.includes("/logout")) return ["logout"];
    return [currentPath.split("/")[1]];
  })();

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]); // State for open submenus
  const rootSubmenuKeys = ["driver", "settings"]; // Root submenu keys

  // Handle submenu open/close
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys([latestOpenKey]); // Only keep the latest submenu open
    } else {
      setOpenKeys(keys); // Update normally for closing or nested submenus
    }
  };

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const adminMenuItems = [
    {
      key: "dashboard",
      icon: (
        <img
          src={AllIcons.one}
          alt="dashboard"
          width={20}
          style={{
            filter: location.pathname.includes("dashboard")
              ? "brightness(0) invert(0)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="dashboard">Dashboard</NavLink>,
    },
    {
      key: "users",
      icon: (
        <img
          src={AllIcons.four}
          alt="users"
          width={20}
          style={{
            filter: location.pathname.includes("users")
              ? "brightness(0) invert(0)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="users">Users</NavLink>,
    },
    {
      key: "voting_result",
      icon: (
        <img
          src={AllIcons.two}
          alt="voting_result"
          width={20}
          style={{
            filter: location.pathname.includes("voting_result")
              ? "brightness(0) invert(0)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="voting_result">Voting Result</NavLink>,
    },
    {
      key: "voting_candidate",
      icon: (
        <img
          src={AllIcons.two}
          alt="voting_candidate"
          width={20}
          style={{
            filter: location.pathname.includes("voting_candidate")
              ? "brightness(0) invert(0)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="voting_candidate">Voting Candidates</NavLink>,
    },

    {
      key: "create_voting",
      icon: (
        <img
          src={AllIcons.two}
          alt="create_voting"
          width={20}
          style={{
            filter: location.pathname.includes("create_voting")
              ? "brightness(0) invert(0)"
              : undefined,
          }}
        />
      ),
      label: <NavLink to="create_voting">Create Voting</NavLink>,
    },


  ];

  const commonItems = [
    {
      key: "profile",
      icon: (
        <img
          src={AllIcons.seven}
          alt="profile"
          width={16}
          height={16}
          style={{
            filter:
              location.pathname.includes("/profile") ||
              location.pathname.includes("/edit-profile")
                ? "brightness(0) invert(0)"
                : undefined,
          }}
        />
      ),
      label: <NavLink to="profile">Profile</NavLink>,
    },
    {
      key: "settings",
      label: <span>Settings</span>,
      icon: (
        <img
          src={AllIcons.eight}
          alt="settings"
          width={20}
          style={{
            filter:
              location.pathname.includes("change-password") ||
              location.pathname.includes("faq") ||
              location.pathname.includes("safety") ||
              location.pathname.includes("terms-and-condition") ||
              location.pathname.includes("customer-service")
                ? "brightness(0) invert(0)"
                : undefined,
          }}
        />
      ),
      children: [
        {
          key: "change-password",
          icon: <span>•</span>,
          label: (
            <NavLink to="settings/change-password">Change Password</NavLink>
          ),
        },

      ],
    },
    {
      key: "logout",
      icon: (
        <img
          src={AllIcons.nine}
          alt="logout"
          width={16}
          height={16}
          style={{ color: "#222222" }}
        />
      ),
      label: (
        <div onClick={() => localStorage.removeItem("home_care_user")}>
          <NavLink to="/signin">Logout</NavLink>
        </div>
      ),
    },
  ];

  const menuItems =
    userRole?.role === "admin" ? adminMenuItems : companyMenuItems; // Ensure companyMenuItems is defined
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timeout = setTimeout(() => setProgress(100), 100);
    const resetTimeout = setTimeout(() => setProgress(0), 200);
    return () => {
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
    };
  }, [location]);

  return (
    <div className="h-screen bg-white">
      <TopLoadingBar
        color="#de8c9d"
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      <ScrollRestoration />
      <Layout className="!relative !bg-white">
        <Sider
          width={240}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 0px 5px #00000040",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Link to="/">
            <img
              src={AllImages.logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="my-7 mx-auto w-52"
            />
          </Link>
          <Menu
            mode="inline"
            defaultSelectedKeys={pathSegment}
            selectedKeys={activeKeys}
            openKeys={openKeys} // Bind openKeys state
            onOpenChange={onOpenChange} // Handle open/close
            style={{
              backgroundColor: "transparent",
              border: "none",
              paddingLeft: "6px",
              paddingRight: "6px",
            }}
            items={menuItems}
          />
          <Typography.Title
            level={5}
            className="mt-5 text-xs font-medium !text-[#727272]"
            style={{
              paddingLeft: "6px",
              paddingRight: "6px",
              marginLeft: "12%",
            }}
          >
            OTHER
          </Typography.Title>
          <Menu
            mode="inline"
            defaultSelectedKeys={pathSegment}
            selectedKeys={activeOtherKeys}
            openKeys={openKeys} // Bind openKeys state
            onOpenChange={onOpenChange} // Handle open/close
            style={{
              paddingBottom: "40px",
              backgroundColor: "transparent",
              border: "none",
              paddingLeft: "6px",
              paddingRight: "6px",
            }}
            items={commonItems}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#ffffff",
              position: "sticky",
              top: 0,
              zIndex: 999,
              marginLeft: 2,
            }}
          >
            <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
          <Content>
            <div className="bg-base-color px-2 xl:px-5 py-4 xl:py-5">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
