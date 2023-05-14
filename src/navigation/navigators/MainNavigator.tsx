import {createStackNavigator} from '@react-navigation/stack';
import {MainRouteProps, MainRoutes} from '../routes/main_routes';
import {HomeTabNavigator} from './HomeTabNavigator';
import {EditScreen} from '../../modules/account/screens/editaccount';
import {MySerieDetails} from '../../modules/tvshows/components/details';

const Main = createStackNavigator<MainRouteProps>();

export const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen name={MainRoutes.HomeTab} component={HomeTabNavigator} />
      <Main.Screen name={MainRoutes.EditProfile} component={EditScreen} />
      <Main.Screen name={MainRoutes.SerieDetails} component={MySerieDetails} />
    </Main.Navigator>
  );
};
