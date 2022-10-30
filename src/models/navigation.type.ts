import {RouteNames} from './../navigation/routeNames';

export type RootStackParamList = {
  [RouteNames.HomeScreen]: undefined;
  [RouteNames.DetailsScreen]: {
    detailScreen: any;
  };
  [RouteNames.FavoritesScreen]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
