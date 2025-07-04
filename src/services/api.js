import axios from "axios";

const api = axios.create({
  baseURL: "https://cadastro-backend-dl97.onrender.com"
});

export default api;
