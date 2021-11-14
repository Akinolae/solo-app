import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import combineReducers from "./reducers";

const config = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const middleWare = [thunk];
const persistedReducer = persistReducer(config, combineReducers);

const appStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleWare));
  const persiststore = persistStore(store);
  return { store, persiststore };
};

export default appStore;
