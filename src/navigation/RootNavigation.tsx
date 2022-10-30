import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {navigationRef, noHeader} from './utils/options.util';
import PublicScreens from './PublicScreens';
import {RouteNames} from './routeNames';
import Details from '../screens/Details';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator screenOptions={noHeader}>
          <Stack.Screen
            name={RouteNames.PublicScreens}
            component={PublicScreens}
          />
          <Stack.Screen name={RouteNames.DetailsScreen} component={Details} />
        </Stack.Navigator>
      </QueryClientProvider>
    </SafeAreaProvider>
  </NavigationContainer>
);

export default RootNavigation;
