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

//* Admin Dashboard

//* Company Dashboard
import Loading from "../Components/UI/Loading";

import CreateVotingPage from "../Pages/Admin/CreateVotingPage";
import SettingsPage from "../Pages/Admin/SettingsPage";
import VotingCandidatePage from "../Pages/Admin/VotingCandidatePage";
import Employees from "../Pages/SuperAdmin/Employees";
import Passengers from "../Pages/SuperAdmin/Passengers";
import SuperAdminDashboard from "../Pages/SuperAdmin/SuperAdminDashboard";
import UpcomingVote from "../Pages/SuperAdmin/UpcomingVote";
import Timer from "../Pages/Admin/Timer";

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
        path: "upcomming_vote",
        element: <UpcomingVote />,
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
        path: "timer",
        element: <Timer />,
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
        path: "notifications",
        element: <Notifications />,
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
