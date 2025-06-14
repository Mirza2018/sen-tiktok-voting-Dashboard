/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";

import DashboardLayout from "../Components/Layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

//* Auth
import ForgotPassword from "../Pages/Auth/ForgetPassword";
import OtpPage from "../Pages/Auth/OtpPage";
import SignIn from "../Pages/Auth/SignIn";
import UpdatePassword from "../Pages/Auth/UpdatePassword";

//* Common

import Notifications from "../Components/Dashboard/Notifications";
import EditProfile from "../Pages/Common/EditProfile";
import Profile from "../Pages/Common/Profile";
import SettingsChangePassword from "../Pages/Common/settings/SettingsChangePassword";
import SettingsForgotPassword from "../Pages/Common/settings/SettingsForgotPassword";
import SettingsOtpPage from "../Pages/Common/settings/SettingsOtpPage";
import SettingsUpdatePassword from "../Pages/Common/settings/SettingsUpdatePassword";
import TermsOfService from "../Pages/Common/settings/TermsOfService";

//* Admin Dashboard

//* Company Dashboard
import Loading from "../Components/UI/Loading";
import AdminAllFeedBack from "../Pages/Admin/AllFeedback";

import FAQ from "../Components/Dashboard/FAQ/FAQ";
import DriverRequestAccept from "../Components/SuperAdminPages/DriverRequestPage/DriverRequestAccept";
import DriverSeeDetails from "../Components/SuperAdminPages/DriverRequestPage/DriverSeeDetails";
import CreateVotingPage from "../Pages/Admin/CreateVotingPage";
import NotificationsPage from "../Pages/Admin/NotificationsPage";
import SettingsPage from "../Pages/Admin/SettingsPage";
import VotingCandidatePage from "../Pages/Admin/VotingCandidatePage";
import CustomerService from "../Pages/Common/settings/CustomerService";
import Safely from "../Pages/Common/settings/Safely";
import AllDriver from "../Pages/SuperAdmin/AllDriver";
import DriverRequest from "../Pages/SuperAdmin/DriverRequest";
import EarningsPage from "../Pages/SuperAdmin/EarningsPage";
import Employees from "../Pages/SuperAdmin/Employees";
import Offers from "../Pages/SuperAdmin/Offers";
import Passengers from "../Pages/SuperAdmin/Passengers";
import SuperAdminDashboard from "../Pages/SuperAdmin/SuperAdminDashboard";

function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/admin/dashboard`, { replace: true });
  }, [navigate]);

  // Optionally display a loading indicator
  return <Loading />;
}

const router = createBrowserRouter([
  {
    path: "/",
    index: true, // This applies to the exact path "/"
    element: <AuthRedirect />,
  },
  {
    path: "/dashboard",
    index: true, // This applies to the exact path "/"
    element: <AuthRedirect />,
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <SuperAdminDashboard />,
      },
      {
        path: "users",
        element: <Employees />,
      },
      {
        path: "voting_result",
        element: <Passengers />,
      },
      {
        path: "voting_candidate",
        element: <VotingCandidatePage />,
      },
      {
        path: "create_voting",
        element: <CreateVotingPage />,
      },

      {
        path: "all-driver",
        element: <AllDriver />,
      },
      {
        path: "driver-request",
        element: <DriverRequest />,
      },
      {
        path: "driver-request/deatils/:id",
        element: <DriverSeeDetails />,
      },
      {
        path: "driver-request/deatils/:id/accepted",
        element: <DriverRequestAccept />,
      },

      {
        path: "earnings",
        element: <EarningsPage />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "notification",
        element: <NotificationsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "settings/change-password",
        element: <SettingsChangePassword />,
      },
      {
        path: "settings/faq",
        element: <FAQ />,
      },
      {
        path: "settings/safety",
        element: <Safely />,
      },
      {
        path: "settings/terms-and-condition",
        element: <TermsOfService />,
      },
      {
        path: "settings/customer-service",
        element: <CustomerService />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "show-feedback",
        element: <AdminAllFeedBack />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },

      {
        path: "settings/forgot-password",
        element: <SettingsForgotPassword />,
      },
      {
        path: "settings/otp-page",
        element: <SettingsOtpPage />,
      },
      {
        path: "settings/update-password",
        element: <SettingsUpdatePassword />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "verify-otp",
    element: <OtpPage />,
  },
  {
    path: "update-password",
    element: <UpdatePassword />,
  },
]);

export default router;
