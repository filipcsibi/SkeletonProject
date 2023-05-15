import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {SeriesStore, useSeriesStore} from '../store/useSeriesStore';
import {HeartFillIcon, HeartIcon} from '../../../assets/icons';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';

export const MySerieDetails = () => {
  const {currentSerie} = useSeriesStore((state: SeriesStore) => {
    return {
      currentSerie: state.currentSerie,
    };
  });
  const {
    getFavorites,
    favorites,
    addFavoritesForUser,
    currentUser,
    users,
    getUserFavorites,
    removeFavoriteForUser,
  } = useAuthStore((state: AuthState) => {
    return {
      getFavorites: state.getFavorites,
      favorites: state.favorites,
      addFavoritesForUser: state.addFavoritesForUser,
      currentUser: state.currentUser,
      users: state.users,
      getUserFavorites: state.getUserFavorites,
      removeFavoriteForUser: state.removeFavoriteForUser,
    };
  });
  const direct = getUserFavorites(currentUser?.id);
  const handleFavorite = () => {
    if (!currentSerie) return;

    if (!direct?.find(fav => fav.id === currentSerie.id)) {
      //getFavorites([...favorites, currentSerie]);
      addFavoritesForUser(currentUser?.id, currentSerie);

      console.log('favorited');
    } else {
      // getFavorites(favorites.filter(fav => fav.id !== currentSerie.id));
      removeFavoriteForUser(currentUser?.id, currentSerie.id);

      console.log('unfavorited');
    }
  };
  console.log(direct);
  return (
    <View style={styles.main}>
      <View style={styles.view}>
        <Image source={{uri: currentSerie?.image}} style={styles.one}></Image>
      </View>

      <View style={styles.two}>
        <View style={styles.detail}>
          <View style={styles.fixedtitle}>
            <Text style={styles.title}>{currentSerie?.title}</Text>
          </View>
          <Pressable onPress={handleFavorite}>
            {direct?.find(fav => fav.id === currentSerie?.id) ? (
              <HeartFillIcon
                width={50}
                height={50}
                fill={'red'}></HeartFillIcon>
            ) : (
              <HeartIcon width={50} height={50}></HeartIcon>
            )}
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.three}>{currentSerie?.genre}</Text>
          <Text style={styles.three}>{currentSerie?.releaseDate}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.four}>Description:</Text>
          <Text style={[styles.four, {color: 'black'}]}>
            {currentSerie?.description}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  fixedtitle: {height: 115, width: 240, flex: 0},
  detail: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'white',
    height: '90%',
    borderRadius: 30,
  },
  view: {
    maxHeight: '55%',
    maxWidth: '100%',
  },
  main: {
    flex: 1,
    backgroundColor: '#733592',
  },
  one: {
    height: '100%',
    width: '100%',
  },
  two: {
    flex: 1,
    backgroundColor: '#733592',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: -40,
    padding: 20,
  },
  three: {fontSize: 20, marginBottom: 5, color: 'white', fontWeight: 'bold'},
  four: {
    fontSize: 20,
    marginTop: 10,
    color: '#733592',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
});
