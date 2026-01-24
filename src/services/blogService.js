// import API from "./api";

// // Public
// export const getBlogs = () => API.get("/blogs");

// // Admin
// export const createBlog = (data) => API.post("/blogs", data);
// export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
// export const getBlogById = (id) => API.get(`/blogs/${id}`);

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api",
});

export const getBlogs = () => API.get("/blogs");
export const getBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (data) => API.post("/blogs", data);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
