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
  async resetPassword(email) {
    const response = await axios.post("/api/reset", {email});
    return response.data;
  },
  async logout() {
    await axios.delete("/api/logout");
  }
};

export default apiHelpers;
