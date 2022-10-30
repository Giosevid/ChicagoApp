import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ComponentType} from 'react';
import {RootStackParamList} from './navigation.type';

export type ScreenProps = {
  routName: keyof RootStackParamList;
  component: ComponentType<string | any>;
  options?: NativeStackNavigationOptions;
  params?: Record<string, string>;
};

export type ScreenByGroupsProps = {
  screens: ScreenProps[];
  key: string;
  screenOptions?: NativeStackNavigationOptions;
};
