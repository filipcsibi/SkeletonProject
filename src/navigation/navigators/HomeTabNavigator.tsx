import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabRouteProps, HomeTabRoutes} from '../routes/hometab_routes';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PersonIcon, HomeIcon, StarIcon} from '../../assets/icons';
import {AuthState, useAuthStore} from '../../modules/auth/store/useAuthStore';
import {Account} from '../../modules/account/screens/account';
import {MainRoutes} from '../routes/main_routes';
import {useNavigation} from '@react-navigation/native';
import {Home} from '../../modules/tvshows/screens/home';

const HomeTab = createBottomTabNavigator<HomeTabRouteProps>();

export const HomeTabNavigator = () => {
  const {logout} = useAuthStore((state: AuthState) => {
    return {
      logout: state.logout,
    };
  });
  const navigation = useNavigation();
  const Favorites = () => {
    return (
      <View style={styles.favorites}>
        <Text>{HomeTabRoutes.Favorites}</Text>
      </View>
    );
  };
  const Edit = () => {
    return (
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate(MainRoutes.EditProfile)}>
        <Text style={{alignSelf: 'center', color: 'blue', fontSize: 20}}>
          Edit
        </Text>
      </Pressable>
    );
  };
  const Logout = () => {
    return (
      <Pressable
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'magenta',
        }}
        onPress={logout}></Pressable>
    );
  };
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: Logout,
      }}>
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
          headerRight: Edit,
          tabBarShowLabel: false,
          tabBarIcon: () => <PersonIcon width={30} height={30} />,
        }}
      />
    </HomeTab.Navigator>
  );
};
const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    justifyContent: 'center',
    flex: 1,
    width: 100,
    height: 50,
  },
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
