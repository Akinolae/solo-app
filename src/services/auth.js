import axios from "axios";

const login = async (details, user_login) => {
  try {
    const data = await axios.post(
      "https://afrobank.herokuapp.com/Api/v1/login",
      details
    );
    user_login(data.data.message, true);
  } catch (error) {
    throw error.response.data.message;
  }
};

const register = async (details) => {
  try {
    const data = await axios.post(
      "https://afrobank.herokuapp.com/Api/v1/register",
      details
    );
    console.log(data);
  } catch (error) {
    throw error.response.data.message;
  }
};

export { login, register };
