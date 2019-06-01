import axios from "axios";

const apiURL = "http://localhost:4000/api"

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