import {View, Pressable, Text, StyleSheet} from 'react-native';
import {HomeTabRoutes} from '../../../navigation/routes/hometab_routes';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
import {useState} from 'react';
import Modal from 'react-native-modal';

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
