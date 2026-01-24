import API from "./api";

// Public
export const getBlogs = () => API.get("/blogs");

// Admin
export const createBlog = (data) => API.post("/blogs", data);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
export const getBlogById = (id) => API.get(`/blogs/${id}`);
