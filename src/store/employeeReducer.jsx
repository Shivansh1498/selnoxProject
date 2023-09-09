import { employeeReducerActions } from "../constants/employeeReducerActions";

const employeeReducer = (state, { type, payload }) => {
  switch (type) {
    case employeeReducerActions.SET_ITEM:
      return {
        ...state,
        employeeDetails: payload,
      };

    case employeeReducerActions.ADD_ITEM:
      return {
        ...state,
        employeeDetails: [...state.employeeDetails, payload],
      };

    case employeeReducerActions.UPDATE_ITEM:
      const updatedDetails = state.employeeDetails.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        employeeDetails: updatedDetails,
      };

    case employeeReducerActions.DELETE_ITEM:
      const filteredDetails = state.employeeDetails.filter(
        (item) => item.id !== payload
      );
      return {
        ...state,
        employeeDetails: filteredDetails,
      };
    default:
      return state;
  }
};

const singleEmployeeReducer = (state, { type, payload }) => {
  switch (type) {
    case employeeReducerActions.ADD_SINGLE_ITEM:
      return {
        ...state,
        singleEmployeeDetail: payload,
      };

    case employeeReducerActions.REMOVE_SINGLE_ITEM:
      return {};
    default:
      return state;
  }
};

export { employeeReducer, singleEmployeeReducer };
