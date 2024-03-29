import {createStackNavigator} from '@react-navigation/stack';
import {ViewRecipeScreen} from '../screens/viewRecipe.screen';
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
          name="ViewRecipe"
          component={ViewRecipeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
