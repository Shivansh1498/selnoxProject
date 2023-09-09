import { createBrowserRouter } from "react-router-dom";
import EmployeeRegistrationForm from "../pages/EmployeeRegistrationForm/EmployeeRegistrationForm";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import SingleEmployeeDetails from "../pages/SingleEmployeeDetails/SingleEmployeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EmployeeRegistrationForm />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />,
  },
  {
    path: "/view-employee/:id/:name",
    element: <SingleEmployeeDetails />,
  },
]);
