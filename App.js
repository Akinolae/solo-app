import React from "react";
import SignInScreen from "./src/screens/signInScreen";
import DashBoardScreen from "./src/screens/dashboadScreen";
import RegisterScreen from "./src/screens/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./src/services/appstore";

const Stack = createNativeStackNavigator();
const screens = [
  { name: "signin", component: SignInScreen },
  { name: "register", component: RegisterScreen },
  {
    name: "dashboard",
    component: DashBoardScreen,
  },
];

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persiststore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="signin">
            {screens.map((screen, i) => {
              return (
                <Stack.Screen
                  key={i}
                  name={screen.name}
                  component={screen.component}
                  options={{ headerShown: false }}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
