import {Series} from '../../modules/tvshows/types/series';

export enum MainRoutes {
  HomeTab = 'hometabscreen',
  EditProfile = 'editprofile',
  SerieDetails = 'seriedetails',
}
export type MainRouteProps = {
  [MainRoutes.HomeTab]: undefined;
  [MainRoutes.EditProfile]: undefined;
  [MainRoutes.SerieDetails]: Series;
};
