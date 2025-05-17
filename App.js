
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
        <Tab.Screen name="Keşfet" component={ExploreScreen} />
        <Tab.Screen name="Harita" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
