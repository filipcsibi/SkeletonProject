export enum AppRoutes {
  Home = 'homescreen',
  Auth = 'authscreen',
}
export type AppRouteProps = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Auth]: undefined;
};
