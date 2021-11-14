import axios from "axios";

const login = async (details) => {
  try {
    const data = await axios.post(
      "https://afrobank.herokuapp.com/Api/v1/login",
      details
    );
    console.log(data.data);
  } catch (error) {
    throw error.response.data.message;
  }
};

export { login };
