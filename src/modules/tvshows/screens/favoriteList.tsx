import {SeriesStore, useSeriesStore} from '../store/useSeriesStore';
import {View, ListRenderItemInfo, FlatList, StyleSheet} from 'react-native';
import {SerieCard} from './seriesCard';
import {Series} from '../types/series';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';

export const FavoriteList = () => {
  const {favorites} = useAuthStore((state: AuthState) => {
    return {
      favorites: state.favorites,
    };
  });
  const renderItem = ({item}: ListRenderItemInfo<Series>) => {
    return <SerieCard item={item} onPress={() => null}></SerieCard>;
  };
  return (
    <View style={styles.main}>
      <FlatList data={favorites} renderItem={renderItem}></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#733592',
    justifyContent: 'center',
    flex: 1,
  },
});
