import {createStackNavigator} from "@react-navigation/stack";
import Settings from "../screens/Settings";
import HelpWithFAQ from "../screens/HelpWithFAQ";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HelpWithFAQ" component={HelpWithFAQ} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
