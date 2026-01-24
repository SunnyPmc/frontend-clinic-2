import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Uses your .env value
});

// Optional: attach admin token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
