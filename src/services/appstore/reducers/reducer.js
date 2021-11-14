import {
  LOGIN,
  pinReset,
  register,
  transactionHistory,
  toggleBalanceDisplay,
} from "../actions";

const intState = {
  signIn: {
    isSignedIn: false,
    payLoad: {},
  },
  userReg: {
    isRegistered: false,
    payLoad: {},
  },
  userPinReset: {
    isPinReset: false,
    payLoad: {},
  },
  balanceDisplay: false,
  transactions: [],
};

const reducer = (state = intState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        signIn: {
          ...state,
          isSignedIn: action.isSignedIn,
          payLoad: action.payload,
        },
      };
    case register:
      return {
        userReg: {
          ...state,
          isRegistered: action.isRegistered,
          payLoad: action.payload,
        },
      };
    case pinReset:
      return {
        userPinReset: {
          ...state,
          isPinReset: action.isPinReset,
          payLoad: action.payload,
        },
      };
    case transactionHistory:
      return {
        ...state,
        transactions: action.payload,
      };
    case toggleBalanceDisplay:
      return {
        ...state,
        balanceDisplay: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
