import {
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useState} from 'react';

import {SeriesStore, useSeriesStore} from '../store/useSeriesStore';
import {StackScreenProps} from '@react-navigation/stack';
import {HeartFillIcon, HeartIcon} from '../../../assets/icons';
import {Series} from '../types/series';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';

export const MySerieDetails = () => {
  const {currentSerie} = useSeriesStore((state: SeriesStore) => {
    return {
      currentSerie: state.currentSerie,
    };
  });
  const {getFavorites, favorites} = useAuthStore((state: AuthState) => {
    return {
      getFavorites: state.getFavorites,
      favorites: state.favorites,
    };
  });

  const handleFavorite = () => {
    if (!currentSerie) return;
    if (!favorites.find(fav => fav.id === currentSerie.id)) {
      getFavorites([...favorites, currentSerie]);
      console.log('favorited');
    } else {
      getFavorites(favorites.filter(fav => fav.id !== currentSerie.id));
      console.log('unfavorited');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.view}>
        <Image source={{uri: currentSerie?.image}} style={styles.one}></Image>
      </View>

      <View style={styles.two}>
        <View
          style={{
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>{currentSerie?.title}</Text>
          <Pressable onPress={handleFavorite}>
            {favorites.find(fav => fav.id === currentSerie?.id) ? (
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
          <Text style={styles.three}>{currentSerie?.releasedate}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.four}>Description:</Text>
          <Text style={[styles.four, {color: 'white'}]}>
            {currentSerie?.description}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    backgroundColor: 'gray',
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
    fontSize: 35,
    fontWeight: '900',
    color: 'yellow',
  },
});
