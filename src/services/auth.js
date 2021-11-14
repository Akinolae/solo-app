import axios from "axios";

const login = async (details) => {
  try {
    await axios.post("https://afrobank.herokuapp.com/Api/v1/login", details);
  } catch (error) {
    throw error.response.data.message;
  }
};

export { login };
