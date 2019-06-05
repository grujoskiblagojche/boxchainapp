import axios from "axios";
import { Platform } from "react-native";

// const apiURL = "http://192.168.1.122:4000/api";
const apiURL = "http://localhost:4000/api";

// "http://" + Platform.OS == "ios"
//   ? "localhost"
//   : "192.168.1.122" + ":4000/api";

export const http = axios.create({
  baseURL: apiURL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

export const setAuthorizationToken = token => {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthorizationToken = () => {
  delete http.defaults.headers.common["Authorization"];
};
