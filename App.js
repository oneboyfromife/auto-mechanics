import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import TabNavigator from "./src/navigators/TabNavigator";

import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";

const [fontsLoaded] = useFonts({
  "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
});

if (!fontsLoaded) {
  return null;
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <AuthNavigator />
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}
