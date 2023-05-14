import {createStackNavigator} from '@react-navigation/stack';
import {AuthRouteProps, AuthRoutes} from '../routes/auth_routes';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {LoginForm} from '../../components/login-form';
import {Login} from '../../screens/login';

const Auth = createStackNavigator<AuthRouteProps>();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name={AuthRoutes.Login} component={Login} />
    </Auth.Navigator>
  );
};

const styles = StyleSheet.create({
  loginscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
