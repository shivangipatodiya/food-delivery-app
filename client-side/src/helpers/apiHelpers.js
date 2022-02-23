import axios from "axios";

const apiHelpers = {
  async register(newUser) {
    const response = await axios.post("/api/register", newUser);
    return response.data;
  },
  async login(data, type) {
    const response = await axios.post("/api/login", {data, type});
    return response.data;
  },
  async askReset(email) {
    const response = await axios.post("/api/forgot-password", {email});
    return response.data;
  },
  async reset(data) {
    const response = await axios.put("/api/reset", data);
    return response.data;
  },
  async logout() {
    await axios.delete("/api/logout");
  },
  async getRestaurants() {
    const response = await axios.get("/api/restaurants");
    return response.data;
  }
};

export default apiHelpers;
