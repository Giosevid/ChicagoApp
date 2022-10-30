import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../../models/navigation.type';

export const noHeader = {
  headerShown: false,
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
