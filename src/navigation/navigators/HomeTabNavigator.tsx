import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabRouteProps, HomeTabRoutes} from '../routes/hometab_routes';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {PersonIcon, HomeIcon, StarIcon} from '../../assets/icons';
import {AuthState, useAuthStore} from '../../modules/auth/store/useAuthStore';
import {Account} from '../../modules/account/screens/account';
import {useNavigation} from '@react-navigation/native';
import {SerieList} from '../../modules/tvshows/screens/seriesList';
import {Home} from '../../modules/tvshows/components/home';
import {FavoriteList} from '../../modules/tvshows/screens/favoriteList';

const HomeTab = createBottomTabNavigator<HomeTabRouteProps>();

export const HomeTabNavigator = () => {
  const title = require('../../assets/images/title.png');
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
      <Pressable style={styles.pressable} onPress={() => navigation.navigate()}>
        <Text style={styles.edit}>Edit</Text>
      </Pressable>
    );
  };
  const Logout = () => {
    return (
      <Pressable style={styles.logout} onPress={logout}>
        <Text style={styles.textlogout}>Logout</Text>
      </Pressable>
    );
  };
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerBackgroundContainerStyle: {backgroundColor: '#733592'},
        headerShown: true,
        headerLeft: Logout,
        headerTitle: () => <Image source={title} style={styles.image}></Image>,
        headerTitleAlign: 'center',
        headerStyle: styles.header,
        tabBarStyle: styles.tabBar,

        // headerLeft: Logout,
      }}>
      <HomeTab.Screen
        name={HomeTabRoutes.Home}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={focused ? 40 : 30}
              height={focused ? 40 : 30}
              fill={focused ? '#461160' : 'black'}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name={HomeTabRoutes.Favorites}
        component={FavoriteList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <StarIcon
              width={focused ? 40 : 30}
              height={focused ? 40 : 30}
              fill={focused ? '#461160' : 'black'}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name={HomeTabRoutes.Profile}
        component={Account}
        options={{
          headerRight: Edit,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <PersonIcon
              width={focused ? 40 : 30}
              height={focused ? 40 : 30}
              fill={focused ? '#461160' : 'black'}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    height: '7%',
    borderColor: '#461160',
    borderWidth: 2,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    resizeMode: 'contain',
  },
  header: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 75,
  },
  textlogout: {color: '#461160', fontSize: 20, fontWeight: 'bold'},
  logout: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {alignSelf: 'center', color: 'blue', fontSize: 20},
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
