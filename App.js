import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from "./src/screens/homescreen";
import SignInScreen from "./src/screens/signInScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const screens = [
  { name: "Home", component: HomeScreen },
  { name: "signin", component: SignInScreen },
];

export default function App() {
  return (
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
  );
}
