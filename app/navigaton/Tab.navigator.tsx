import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/home.screen";
import { Settings } from "react-native";
import { SettingsScreen } from "../screens/settings.screen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} /> 
        <Tab.Screen name="Settings" component={SettingsScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}