import React, { Component } from "react";
import HomeScreen from "./homescreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons";
import Settings from "./settingsScreen";
import Profile from "./profileScreen";
const Tab = createBottomTabNavigator();

const bottomRoutes = [
  {
    name: "homescreen",
    component: HomeScreen,
    icon: "house",
  },
  { name: "settings", component: Settings },
  {
    name: "profile",
    component: Profile,
  },
];
class DashBoardScreen extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="homescreen">
        {bottomRoutes.map((routes, i) => {
          return (
            <Tab.Screen
              key={i}
              name={routes.name}
              options={{
                headerShown: false,
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
