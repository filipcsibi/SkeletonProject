import {View, ListRenderItemInfo, FlatList, StyleSheet} from 'react-native';
import {SerieCard} from './seriesCard';
import {Series} from '../types/series';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';

export const FavoriteList = () => {
  const {currentUser, getUserFavorites} = useAuthStore((state: AuthState) => {
    return {
      currentUser: state.currentUser,
      getUserFavorites: state.getUserFavorites,
    };
  });
  const direct = getUserFavorites(currentUser?.id);

  const renderItem = ({item}: ListRenderItemInfo<Series>) => {
    return <SerieCard item={item} onPress={() => null}></SerieCard>;
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={direct}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}></FlatList>
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
