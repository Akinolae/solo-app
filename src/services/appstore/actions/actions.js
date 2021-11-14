import {
  LOGIN,
  pinReset,
  register,
  transactionHistory,
  toggleBalanceDisplay,
} from "./index";

const user_login = (data, isSignedIn) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: data,
    isSignedIn,
  });
};

const userRegister = (data, isRegistered) => (dispatch) => {
  dispatch({
    type: register,
    payload: data,
    isRegistered,
  });
};

const userPinReset = (data, isPinReset) => (dispatch) => {
  dispatch({
    type: pinReset,
    payload: data,
    isPinReset,
  });
};

const updateTransactionHistory = (data) => (dispatch) => {
  dispatch({
    type: transactionHistory,
    payload: data,
  });
};

const toggleDisplay = (display) => (dispatch) => {
  dispatch({
    type: toggleBalanceDisplay,
    payload: display,
  });
};

export {
  user_login,
  userPinReset,
  userRegister,
  updateTransactionHistory,
  toggleDisplay,
};
