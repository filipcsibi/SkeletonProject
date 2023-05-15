import {ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';
import {useMemo, useState, useEffect} from 'react';
import {ArrowIcon, HeartFillIcon} from '../../../assets/icons';
import {Series} from '../types/series';
import {SeriesStore, useSeriesStore} from '../store/useSeriesStore';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';

interface props {
  item: Series;
  onPress: () => void;
}
export const SerieCard = (data: props) => {
  const {currentSerie} = useSeriesStore((state: SeriesStore) => {
    return {
      currentSerie: state.currentSerie,
    };
  });
  const {getFavorites, favorites, currentUser, removeFavoriteForUser} =
    useAuthStore((state: AuthState) => {
      return {
        currentUser: state.currentUser,
        getFavorites: state.getFavorites,
        favorites: state.favorites,
        removeFavoriteForUser: state.removeFavoriteForUser,
      };
    });

  const route = useRoute();
  const activeTab = route.name;
  const onPress = () => {
    removeFavoriteForUser(currentUser?.id, data.item.id);
    // setFavoritesForUser(currentUser?.id,favorites.filter(fav => fav.id !== data.item.id));
    console.log(data);
  };

  const dog = require('../../../assets/images/up.png');
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{uri: data.item.image}}
        style={styles.context}
        borderRadius={30}>
        <View style={styles.mainview}>
          <View style={styles.viewsecond}>
            <View style={styles.titlebig}>
              <Text style={styles.title}>{data.item.title}</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {activeTab === 'favoritesscreen' ? (
                <View
                  style={{
                    flex: 0,
                  }}>
                  <Pressable onPress={onPress}>
                    <HeartFillIcon
                      width={50}
                      height={50}
                      fill={'red'}></HeartFillIcon>
                  </Pressable>
                </View>
              ) : null}
              <View style={{flex: 0}}>
                <Text style={styles.title}>{data.item.id}</Text>
              </View>
            </View>
          </View>
          <View style={styles.details}>
            <View>
              <Text style={styles.release}>{data.item.releaseDate}</Text>
            </View>
            <View style={styles.detailsbutton}>
              <Pressable onPress={data.onPress}>
                <ArrowIcon width={35} height={35} fill="white"></ArrowIcon>
              </Pressable>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.typecontent}>{data.item.genre}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewsecond: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlebig: {
    flex: 0,
    height: 120,
    width: 250,
  },
  detailsbutton: {
    backgroundColor: '#461160',
    borderRadius: 340,
    color: 'white',
    padding: 15,
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  mainview: {flex: 1, padding: 20},
  typecontent: {
    opacity: 0.9,
    color: 'black',
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 20,
    width: '30%',
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 5,
  },
  release: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    textAlignVertical: 'top',
    opacity: 0.7,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
    borderRadius: 35,
  },
  context: {
    flex: 1,
  },
  a: {},
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
