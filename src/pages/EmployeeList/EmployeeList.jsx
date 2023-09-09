import React, { useEffect } from "react";
import "./EmployeeList.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { useGlobalContext } from "../../store/employeeContext";
import { deleteData, getData } from "../../utilities/axiosUtilities";
import { employeeReducerActions } from "../../constants/employeeReducerActions";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const { employeeState, dispatch, setSingleEmployeeDispatch } =
    useGlobalContext();

  const handleSingleEmployeeData = (val) => {
    return () => {
      setSingleEmployeeDispatch({
        type: employeeReducerActions.ADD_SINGLE_ITEM,
        payload: val,
      });
    };
  };

  const deleteEmployee = (val) => {
    return () => {
      deleteData(`DeliveryBoy/delete-Employee/${val.id}`)
        .then((data) => {
          dispatch({
            type: employeeReducerActions.DELETE_ITEM,
            payload: val.id,
          });
          alert("Employee deleted successfully");
        })
        .catch((error) => console.error("GET error:", error));
      console.log("deleting employee " + val.id);
    };
  };

  useEffect(() => {
    getData("DeliveryBoy/Get-Employee/")
      .then((data) => {
        dispatch({ type: employeeReducerActions.SET_ITEM, payload: data });
      })
      .catch((error) => console.error("GET error:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="common-center-page">
        <header>
          <h1 className="employee-list-heading">Employee List</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {employeeState.employeeDetails?.map((val, id) => (
                <tr key={id}>
                  <td>{val.FirstName}</td>
                  <td>{val.DOB}</td>
                  <td>{val.StartDate}</td>
                  <td>{val.EndDate}</td>
                  <td>{val.Description}</td>
                  <td>
                    <div className="dropdown">
                      <img
                        src="src/assets/icons/icon_edit_menu.svg"
                        alt="Cinque Terre"
                        width="20"
                        height="20"
                      />
                      <div className="dropdown-content">
                        <ul>
                          <Link
                            onClick={handleSingleEmployeeData(val)}
                            to={`/view-employee/${val.id}/${val.FirstName}`}
                          >
                            <li onClick={handleSingleEmployeeData(val)}>
                              view
                            </li>
                          </Link>
                          <li>update</li>
                          <li onClick={deleteEmployee(val)}>delete</li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default EmployeeList;
