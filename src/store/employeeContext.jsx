import { createContext, useContext, useReducer } from "react";
import { employeeReducer, singleEmployeeReducer } from "./employeeReducer";

const AppContext = createContext();

const initialState = {
  employeeDetails: [],
};

const singleEmployeeInitialState = {
  singleEmployeeDetail: {},
};

const AppProvider = ({ children }) => {
  const [employeeState, dispatch] = useReducer(employeeReducer, initialState);
  const [singleEmployeeState, setSingleEmployeeDispatch] = useReducer(
    singleEmployeeReducer,
    singleEmployeeInitialState
  );

  return (
    <AppContext.Provider
      value={{
        employeeState,
        dispatch,
        singleEmployeeState,
        setSingleEmployeeDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
