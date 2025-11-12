
// _layout.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import DetailScreen from './DetailScreen';
import HomeScreen from './Home';
import ModalScreen from './modal';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
          options={{ title: 'Details Page' }}
        />
        <Stack.Screen
          name="MyModal"
          component={ModalScreen}
          options={{ 
            title: 'My Modal',
            presentation: 'modal'  // stack navigator mein modal style
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
