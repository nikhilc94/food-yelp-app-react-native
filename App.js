import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './src/screens/Search';
import Result from './src/screens/Result';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Search'>
        <Screen
          name='Search'
          component={Search}
          options={{ title: 'Business Search' }}
        />
        <Screen
          name='Result'
          component={Result}
          options={{ title: 'Result' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
