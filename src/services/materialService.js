import axios from "axios";

const API_URL = "http://localhost:5000/api/materials";

export const getMaterials = () => axios.get(API_URL);
