import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabRouteProps, HomeTabRoutes} from '../routes/hometab_routes';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PersonIcon, HomeIcon, StarIcon} from '../../assets/icons';
import {AuthState, useAuthStore} from '../../modules/auth/store/useAuthStore';
import {Account} from '../../modules/account/screens/account';

const HomeTab = createBottomTabNavigator<HomeTabRouteProps>();

export const HomeTabNavigator = () => {
  const {logout} = useAuthStore((state: AuthState) => {
    return {
      logout: state.logout,
    };
  });
  const Home = () => {
    return (
      <View style={styles.home}>
        <Text>{HomeTabRoutes.Home}</Text>
        <Pressable
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'magenta',
          }}
          onPress={logout}></Pressable>
      </View>
    );
  };
  const Favorites = () => {
    return (
      <View style={styles.favorites}>
        <Text>{HomeTabRoutes.Favorites}</Text>
      </View>
    );
  };
  const Profile = () => {
    return (
      <View style={styles.profile}>
        <Text>{HomeTabRoutes.Profile}</Text>
      </View>
    );
  };
  return (
    <HomeTab.Navigator screenOptions={{headerShown: false}}>
      <HomeTab.Screen
        name={HomeTabRoutes.Home}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeIcon width={30} height={30} />,
        }}
      />
      <HomeTab.Screen
        name={HomeTabRoutes.Favorites}
        component={Favorites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <StarIcon width={30} height={30} />,
        }}
      />
      <HomeTab.Screen
        name={HomeTabRoutes.Profile}
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <PersonIcon width={30} height={30} />,
        }}
      />
    </HomeTab.Navigator>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'red',
  },
  favorites: {
    flex: 1,
    backgroundColor: 'blue',
  },
  profile: {
    flex: 1,
    backgroundColor: 'green',
  },
});
