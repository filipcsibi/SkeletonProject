import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SerieCard} from './seriesCard';
import {Series} from '../types/series';
import {fetchSeries} from '../../../services/series.service';
import {SeriesStore, useSeriesStore} from '../store/useSeriesStore';
export const SerieList = ({navigation}: any) => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [ending, setEnding] = useState<boolean>(false);
  const {series, setCurrentSerie, getSeries} = useSeriesStore(
    (state: SeriesStore) => {
      return {
        series: state.series,
        setCurrentSerie: state.setCurrentSerie,
        getSeries: state.getSeries,
      };
    },
  );
  useEffect(() => {
    if (!ending)
      fetchSeries(page)
        .then((data: Series[]) => {
          if (!data) {
            setEnding(true);
            return;
          }
          getSeries([...series, ...data]);
          setLoading(false);
          setLoadingMore(false);
        })
        .catch(error => console.error(error));
  }, [page]);
  const onEnd = () => {
    if (loadingMore) return;
    setPage(page + 1);
    setLoadingMore(true);
  };
  const onReFresh = () => {
    setPage(1);
    //setLoading(true);
    setEnding(false);
    getSeries([]);
  };
  //  const searchQuery = 'aa'
  //   const filteredData: Series[] = series.filter(item =>
  //     item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  //   );
  const Navi = (item: Series) => {
    navigation.navigate('seriedetails', {...item});
  };

  const renderItem = ({item}: ListRenderItemInfo<Series>) => {
    return (
      <SerieCard
        item={item}
        onPress={() => {
          setCurrentSerie(item);
          Navi(item);
        }}></SerieCard>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        ListHeaderComponent={loading ? <ActivityIndicator /> : <View />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEnd}
        onEndReachedThreshold={1}
        refreshing={loading}
        onRefresh={onReFresh}
        contentContainerStyle={!series.length ? {flex: 1} : {}}
        ListFooterComponent={() =>
          loadingMore ? <ActivityIndicator /> : <View />
        }
        ListEmptyComponent={<ActivityIndicator style={{flex: 1}} />}
        data={series}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    borderRadius: 20,
    height: 75,
    width: '95%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {fontSize: 30, color: '#461160', fontWeight: 'bold'},
  main: {
    backgroundColor: '#733592',
    justifyContent: 'center',
    flex: 1,
  },
});
