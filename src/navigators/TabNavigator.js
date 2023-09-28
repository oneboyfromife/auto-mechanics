import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Home from "../screens/Home";
import History from "../screens/History";
import { colors } from "../constants/colors";
import Settings from "../screens/Settings";
import SettingsStack from "./SettingsStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            primarygrey = focused ? colors.primary : "grey";
          } else if (route.name === "History") {
            iconName = focused ? "archive" : "archive-outline";
            primarygrey = focused ? colors.primary : "grey";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            primarygrey = focused ? colors.primary : "grey";
          }
          return (
            <Ionicons name={iconName} size={24} style={{color: primarygrey}} />
          );
        },
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
