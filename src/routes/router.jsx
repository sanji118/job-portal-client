import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "../context/PrivateRoute";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AllJobsPage from "../pages/AllJobsPage";
import { JobDetailsPage } from "../pages/JobDetailsPage";
import UpdateJobPage from "../pages/UpdateJobPage";
import AddJobPage from "../pages/AddJobPage";
import MyApplicationsPage from "../pages/MyApplicationsPage";
import ApplyJobPage from "../pages/ApplyJobPage";
import MyJobPostsPage from "../pages/MyJobPostsPage";
import ReviewApplicationsPage from "../pages/ReviewApplicationsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../components/NotFound";

const jobs = () => fetch('http://localhost:5000/jobs');

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { 
        index: true, 
        element: <HomePage />,
        loader : jobs
      },
      { 
        path: "jobs", 
        element: <PrivateRoute><AllJobsPage /></PrivateRoute>,
        loader: jobs 
      },
      { 
        path: "jobs/details/:id", 
        element: <PrivateRoute><JobDetailsPage /></PrivateRoute>,
        loader: async ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`) 
      },
      {
        path: "jobs/update/:id", 
        element: <PrivateRoute><UpdateJobPage /></PrivateRoute>,
        loader: async ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`) 
      },
      { 
        path: "add-jobs", 
        element: <PrivateRoute><AddJobPage /></PrivateRoute> 
      },
      { 
        path: "application/apply/:id", 
        element: <PrivateRoute><ApplyJobPage /></PrivateRoute>,
        loader: async ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`) 
      },
      { 
        path: "application/me", 
        element: <PrivateRoute><MyApplicationsPage /></PrivateRoute>,
        loader: jobs 
      },
      { 
        path: "my-jobs", 
        element: <PrivateRoute><MyJobPostsPage /></PrivateRoute>,
        loader: jobs 
      },
      { 
        path: "my-jobs/:id", 
        element: <PrivateRoute><ReviewApplicationsPage /></PrivateRoute>,
        loader: async ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`) 
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />, 
    },
    {
    path: "register",
    element: <RegisterPage />,
    },
    {
    path: "*",
    element: <NotFound />, // 404 Page
    },
]);

export default router;
