import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import TabNavigator from "./src/navigators/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}
