import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Backend URL
});

// Add Authorization token to headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
