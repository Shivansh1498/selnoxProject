import { useState } from "react";
import "./EmployeeRegistrationForm.css";
import { postData } from "../../utilities/axiosUtilities";
import { Navbar } from "../../components/Navbar/Navbar";
import { useGlobalContext } from "../../store/employeeContext";
import { employeeReducerActions } from "../../constants/employeeReducerActions";

const EmployeeRegistrationForm = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
  });

  const { dispatch } = useGlobalContext();

  const handleDetails = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: employeeReducerActions.ADD_ITEM,
      payload: employeeDetails,
    });
    postData("DeliveryBoy/Add-Employee/", employeeDetails)
      .then((data) => {
        console.log(data);
        alert("Employee added successfully");
      })
      .catch((error) => console.error("GET error:", error));
    setEmployeeDetails({
      FirstName: "",
      LastName: "",
      DOB: "",
      Study: "",
      StartDate: "",
      EndDate: "",
      CurrentSalary: "",
      Description: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="common-center-page">
        <header>
          <h1 className="registration-heading">Employee Registration Form</h1>
        </header>
        <main>
          <form className="registration-form-container" onSubmit={handleSubmit}>
            <div className="form-group form-half-width">
              <label htmlFor="FirstName">First Name*</label>
              <input
                required
                type="text"
                name="FirstName"
                value={employeeDetails.FirstName}
                onChange={handleDetails}
                id="FirstName"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-half-width">
              <label htmlFor="LastName">Last Name*</label>
              <input
                required
                type="text"
                name="LastName"
                value={employeeDetails.LastName}
                onChange={handleDetails}
                id="LastName"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-full-width">
              <label htmlFor="DOB">DOB</label>
              <input
                required
                type="date"
                name="DOB"
                value={employeeDetails.DOB}
                onChange={handleDetails}
                id="DOB"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-full-width">
              <label htmlFor="Study">Study</label>
              <input
                required
                type="text"
                name="Study"
                value={employeeDetails.Study}
                onChange={handleDetails}
                id="Study"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-half-width">
              <label htmlFor="StartDate">Start Date</label>
              <input
                required
                type="date"
                name="StartDate"
                value={employeeDetails.StartDate}
                onChange={handleDetails}
                id="StartDate"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-half-width">
              <label htmlFor="EndDate">End Date</label>
              <input
                required
                type="date"
                name="EndDate"
                value={employeeDetails.EndDate}
                onChange={handleDetails}
                id="EndDate"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-full-width">
              <label htmlFor="CurrentSalary">Current Salary</label>
              <input
                required
                type="text"
                name="CurrentSalary"
                value={employeeDetails.CurrentSalary}
                onChange={handleDetails}
                id="CurrentSalary"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group form-full-width">
              <label htmlFor="Description">Description</label>
              <textarea
                name="Description"
                value={employeeDetails.Description}
                onChange={handleDetails}
                id="Description"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div className="button-group">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default EmployeeRegistrationForm;
