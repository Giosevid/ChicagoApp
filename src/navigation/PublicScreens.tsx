import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {RouteNames} from './routeNames';
import Favorites from '../screens/Favorites';

const BottomStack = createBottomTabNavigator();

export default function PublicScreens() {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        name={RouteNames.HomeScreen}
        component={Home}
        options={{
          title: 'Artes',
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <BottomStack.Screen
        name={RouteNames.FavoritesScreen}
        component={Favorites}
        options={{
          title: 'Favoritos',
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </BottomStack.Navigator>
  );
}
