// import axios from "axios";

// const API_URL = "http://localhost:5000/api/testimonials";

// export const fetchTestimonials = async () => {
//   const res = await axios.get(API_URL);
//   return res.data;
// };

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // dynamic backend URL
});

// Fetch all testimonials
export const fetchTestimonials = () => API.get("/testimonials");
