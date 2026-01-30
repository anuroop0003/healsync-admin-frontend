import InstitutionLayout from "@/components/layout/institution-layout";
import PatientLayout from "@/components/layout/patient-layout";
import InstitutionDashboard from "@/pages/institution/dashboard";
import Login from "@/pages/login/index";
import DoctorRegistration from "@/pages/register/doctor/index";
import InstitutionRegistration from "@/pages/register/institution/index";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register/institution",
    element: <InstitutionRegistration />,
  },
  {
    path: "/register/doctor",
    element: <DoctorRegistration />,
  },
  {
    path: "institution",
    element: <InstitutionLayout />,
    children: [
      {
        path: "dashboard",
        element: <InstitutionDashboard />,
      },
    ],
  },
  {
    path: "institution/patient/:id",
    element: <PatientLayout />,
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
