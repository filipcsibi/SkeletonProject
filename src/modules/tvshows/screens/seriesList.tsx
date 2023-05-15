import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ListRenderItemInfo,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SerieCard} from './seriesCard';
import {Series} from '../types/series';
import {fetchSeries} from '../../../services/series.service';
import {SeriesStore, useSeriesStore} from '../store/useSeriesStore';
import {useDebounce} from '../../../hooks/use-debounce';
interface Props {
  text: string;
  onPress: () => void;
}
export const SerieList = ({navigation, props, filter1}: any) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);
  const [firstFetch, setFirstFetch] = useState(0);

  const {series, setCurrentSerie, getSeries} = useSeriesStore(
    (state: SeriesStore) => {
      return {
        series: state.series || null,
        setCurrentSerie: state.setCurrentSerie,
        getSeries: state.getSeries,
      };
    },
  );
  const debouncedSearch = useDebounce(props, 1000);
  useEffect(() => {
    if (!noData)
      fetchSeries(limit, page)
        .then((data: Series[]) => {
          if (data.length === 0 && firstFetch === 1) {
            setNoData(true);
          }
          setLoadingMore(false);
          setLoading(false);
          setFirstFetch(1);
          getSeries([...series, ...data]);
        })
        .catch(error => console.error(error));
  }, [page, debouncedSearch]);
  const onEnd = () => {
    if (loadingMore) return;
    setPage(page + 1);
    setLoadingMore(true);
  };
  const onReFresh = () => {
    setPage(0);
    setFirstFetch(0);
    setNoData(false);

    getSeries([]);
  };

  const filteredData: Series[] = series
    .filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (filter1) {
        return a.title.localeCompare(b.title);
      } else {
        return 0;
      }
    });

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
  useEffect(() => {
    if (filter1 === true) {
      getSeries([]);
      setLimit(40);
      setNoData(false);
      setPage(0);
      setFirstFetch(1);
    } else if (props.length === 0) {
      getSeries([]);
      setLimit(10);
      setPage(0);
      setFirstFetch(0);
      setNoData(false);
    } else {
      getSeries([]);
      setLimit(40);
      setNoData(false);
      setPage(0);
      setFirstFetch(1);
    }

    setSearchQuery(props);
  }, [debouncedSearch, filter1]);

  return (
    <View style={styles.main}>
      {/* <TextInput
        value={searchQuery}
        onChangeText={text => search(text)}
        style={{width: 150, height: 50, backgroundColor: 'white'}}></TextInput> */}
      <FlatList
        ListHeaderComponent={loading ? <ActivityIndicator /> : <View />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={!noData ? onEnd : () => null}
        onEndReachedThreshold={0.5}
        refreshing={loading}
        onRefresh={onReFresh}
        contentContainerStyle={!series.length ? {flex: 1} : {}}
        ListFooterComponent={() =>
          loadingMore ? (
            <ActivityIndicator style={{height: 100, width: 100}} />
          ) : (
            <View />
          )
        }
        ListEmptyComponent={<ActivityIndicator style={{flex: 1}} />}
        data={filteredData}
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
