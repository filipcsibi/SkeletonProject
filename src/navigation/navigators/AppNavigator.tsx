import {createStackNavigator} from '@react-navigation/stack';
import {AppRouteProps, AppRoutes} from '../routes/app_routes';
import {AuthNavigator} from '../../modules/auth/navigation/navigators/AuthNavigator';
import {MainNavigator} from './MainNavigator';

const App = createStackNavigator<AppRouteProps>();
const boolean = false;
export const AppNavigator = () => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      {boolean ? (
        <App.Screen name={AppRoutes.Auth} component={AuthNavigator} />
      ) : (
        <App.Screen name={AppRoutes.Home} component={MainNavigator} />
      )}
    </App.Navigator>
  );
};
