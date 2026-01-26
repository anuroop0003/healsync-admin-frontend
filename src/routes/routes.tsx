import HospitalLayout from "@/components/layout/institution-layout";
import InstitutionDashboard from "@/pages/institution/dashboard";
import Login from "@/pages/login/index";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "institution",
    element: <HospitalLayout />,
    children: [
      {
        path: "dashboard",
        element: <InstitutionDashboard />,
      },
    ],
  },
  {
    path: "/schedule",
    element: <Login />,
  },
  {
    path: "/patients",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
