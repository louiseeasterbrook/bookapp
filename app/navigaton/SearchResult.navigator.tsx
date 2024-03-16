import {createStackNavigator} from '@react-navigation/stack';
import {ViewBookScreen} from '../screens/viewBook.screen';
import TabNavigator from './Tab.navigator';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewBook"
          component={ViewBookScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
