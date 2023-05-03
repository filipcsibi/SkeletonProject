import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from '../components/avatar';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';

export const Account = () => {
  const {currentUser} = useAuthStore((state: AuthState) => {
    return {
      currentUser: state.currentUser,
    };
  });
  console.log(currentUser);

  return (
    <View style={styles.main}>
      <View style={styles.avatar}>
        <Avatar user={currentUser}></Avatar>
      </View>
      <View style={styles.container}></View>
      <View style={styles.container}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: '40%',
    height: '5%',
  },
  container: {
    backgroundColor: 'white',
    width: '80%',
    height: '5%',
  },
  main: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: '50%',
    height: '20%',
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 100,
  },
});
