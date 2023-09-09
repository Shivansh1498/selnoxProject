import React from "react";
import "./SingleEmployeeDetails.css";
import { useGlobalContext } from "../../store/employeeContext";

const SingleEmployeeDetails = () => {
  const { singleEmployeeState } = useGlobalContext();
  const {
    FirstName,
    LastName,
    DOB,
    Study,
    StartDate,
    EndDate,
    CurrentSalary,
    Description,
  } = singleEmployeeState?.singleEmployeeDetail;

  return (
    <>
      <div className="common-center-page single-employee-container">
        <header>
          <h1 className="employee-list-heading">Employee Details</h1>
        </header>
        <ul>
          <li>
            FirstName: <span>{FirstName}</span>
          </li>
          <li>
            LastName: <span>{LastName}</span>
          </li>
          <li>
            DOB:<span> {DOB}</span>
          </li>
          <li>
            Study: <span>{Study}</span>
          </li>
          <li>
            StartDate: <span>{StartDate}</span>
          </li>
          <li>
            EndDate: <span>{EndDate}</span>
          </li>
          <li>
            CurrentSalary: <span>{CurrentSalary}</span>
          </li>
          <li>
            Description:<span> {Description}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleEmployeeDetails;
