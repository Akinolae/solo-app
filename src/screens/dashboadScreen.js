import React, { Component } from "react";
import HomeScreen from "./homescreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/FontAwesome";
import Settings from "./settingsScreen";
import Profile from "./profileScreen";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();

const bottomRoutes = [
  {
    name: "homescreen",
    component: HomeScreen,
    icon: "home",
  },
  { name: "settings", component: Settings, icon: "gear" },
  {
    name: "profile",
    component: Profile,
    icon: "user",
  },
];
class DashBoardScreen extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
        initialRouteName="homescreen"
      >
        {bottomRoutes.map((routes, i) => {
          return (
            <Tab.Screen
              key={i}
              name={routes.name}
              options={{
                headerShown: false,
                tabBarIcon: () => <Icons name={routes.icon} size={20} />,
              }}
              component={routes.component}
            />
          );
        })}
      </Tab.Navigator>
    );
  }
}
export default DashBoardScreen;
