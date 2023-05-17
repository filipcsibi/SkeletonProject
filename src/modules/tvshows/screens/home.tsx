import {View, Pressable, Text, StyleSheet} from 'react-native';
import {HomeTabRoutes} from '../../../navigation/routes/hometab_routes';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
import {useState} from 'react';
import Modal from 'react-native-modal';
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
export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Filter = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.home}>
      <Pressable
        onPress={Filter}
        style={{
          marginTop: 50,
          marginRight: 10,
          flex: 1,
          alignSelf: 'flex-end',
        }}>
        <Text style={styles.filter}>Filter</Text>
      </Pressable>
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
    fontSize: 20,
    color: 'blue',
  },
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
