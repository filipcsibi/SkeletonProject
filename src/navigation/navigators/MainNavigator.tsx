import {createStackNavigator} from '@react-navigation/stack';
import {MainRouteProps, MainRoutes} from '../routes/main_routes';
import {HomeTabNavigator} from './HomeTabNavigator';

const Main = createStackNavigator<MainRouteProps>();

export const MainNavigator = () => {
  return (
    <Main.Navigator>
      <Main.Screen name={MainRoutes.HomeTab} component={HomeTabNavigator} />
    </Main.Navigator>
  );
};
