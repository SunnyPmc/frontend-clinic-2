// import axios from "axios";

// const API_URL = "http://localhost:5000/api/materials";

// export const getMaterials = () => axios.get(API_URL);

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // dynamic backend URL
});

// Fetch all therapy materials
export const getMaterials = () => API.get("/materials");
