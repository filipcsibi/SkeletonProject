import {createStackNavigator} from '@react-navigation/stack';
import {AuthRouteProps, AuthRoutes} from '../routes/auth_routes';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Auth = createStackNavigator<AuthRouteProps>();

export const AuthNavigator = () => {
  const Login = () => {
    return (
      <View style={styles.loginscreen}>
        <Text>{AuthRoutes.Login}</Text>
      </View>
    );
  };
  return (
    <Auth.Navigator>
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
