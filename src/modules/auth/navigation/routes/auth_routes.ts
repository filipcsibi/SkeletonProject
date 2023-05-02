export enum AuthRoutes {
  Login = 'loginscreen',
  Register = 'registerscreen',
  ForgotPassword = 'forgotpasswordscreen',
  ResetPassword = 'resetpasswordscreen',
}
export type AuthRouteProps = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
  [AuthRoutes.ForgotPassword]: undefined;
  [AuthRoutes.ResetPassword]: undefined;
};
