import {View, Pressable, Text, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';
import Modal from 'react-native-modal';
import {SerieList} from '../screens/seriesList';
import {DownIcon} from '../../../assets/icons';
import {StackScreenProps} from '@react-navigation/stack';
import {
  HomeTabRouteProps,
  HomeTabRoutes,
} from '../../../navigation/routes/hometab_routes';
//https://6453db49e9ac46cedf31a3d0.mockapi.io/tvshows

/*

queryParams: search,page,field_name,

    ?search=string for search
    &page=number&limit=10 for pagination
    HOME:
    page with lista of tvshows paginate, search bar by name of show,
    filter button langa search 
    modal cu 2 filtre genre si durata scrollview orizontal cu cateva gen 10 nu toate
    cand dam pe un ecran, ecran de details,pe ecran de details partea de favorites 
    FAVORITES:
    fara search si filter,o sa vina din lista noastra cele favorite,vin din global store nu din api deci pt fiecare user o sa avem favorite gen stocam tot obiectu la user
    la lista de favorite buton pe card cu remove from favorites gen inima dinaia,si sa nu ne putem duce pe details cand apasam,
    Profile:
    ce avem pana acum plus interese
    pe edit profile add intrese,cand le adaugam sa le vedem sub tot in edit gen si si pe profile screenr

*/
export const Home = (
  props: StackScreenProps<HomeTabRouteProps, HomeTabRoutes.Home>,
) => {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const Filter = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.home}>
      <View style={styles.view}>
        <Text style={styles.text}>Series</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          marginBottom: 0,
          borderRadius: 20,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{flex: 1, fontSize: 20}}
          value={search}
          placeholder="Search..."
          onChangeText={setSearch}></TextInput>
        <Pressable onPress={Filter} style={{flexDirection: 'row'}}>
          <Text style={styles.filter}>Filter</Text>
          <DownIcon width={25} height={25} fill={'blue'}></DownIcon>
        </Pressable>
      </View>
      <SerieList {...props} />
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={modalVisible}
        style={styles.modal}>
        <View>
          <Text>Filters:</Text>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    marginTop: '100%',
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filter: {
    fontSize: 18,
    color: 'blue',
  },
  home: {
    flex: 1,
    backgroundColor: '#733592',
  },
  favorites: {
    flex: 1,
    backgroundColor: 'blue',
  },
  profile: {
    flex: 1,
    backgroundColor: 'green',
  },
  view: {
    marginTop: 10,
    borderRadius: 20,
    height: 60,
    width: '95%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {fontSize: 30, color: '#461160', fontWeight: 'bold'},
});
