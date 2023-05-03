import {createStackNavigator} from '@react-navigation/stack';
import {AppRouteProps, AppRoutes} from '../routes/app_routes';
import {AuthNavigator} from '../../modules/auth/navigation/navigators/AuthNavigator';
import {MainNavigator} from './MainNavigator';
import {AuthState, useAuthStore} from '../../modules/auth/store/useAuthStore';

const App = createStackNavigator<AppRouteProps>();

export const AppNavigator = () => {
  const {currentUser} = useAuthStore((state: AuthState) => {
    return {
      currentUser: state.currentUser,
    };
  });
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?.id ? (
        <App.Screen name={AppRoutes.Auth} component={AuthNavigator} />
      ) : (
        <App.Screen name={AppRoutes.Home} component={MainNavigator} />
      )}
    </App.Navigator>
  );
};
