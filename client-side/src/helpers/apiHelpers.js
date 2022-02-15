import axios from "axios";

const apiHelpers = {
  async register(newUser) {
    const response = await axios.post("/api/register", newUser);
    return response.data;
  },
  async login(data) {
    const response = await axios.post("/api/login", data);
    return response.data;
  },
  async logout() {
    await axios.delete("/api/logout");
  }
};

export default apiHelpers;
