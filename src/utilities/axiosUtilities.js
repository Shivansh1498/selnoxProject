import axios from "axios";

// Base URL
const apiBaseUrl = "https://sweede.app";

// Function to perform Axios HTTP requests
const performRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method,
      url: `${apiBaseUrl}/${url}`,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// functions for each HTTP methods
export const getData = (url) => performRequest("GET", url);
export const postData = (url, data) => performRequest("POST", url, data);
export const deleteData = (url) => performRequest("DELETE", url);
export const patchData = (url, data) => performRequest("PATCH", url, data);
