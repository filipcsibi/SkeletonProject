import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
import {useState} from 'react';
import {User} from '../../auth/types/users';

export const EditScreen = () => {
  const title = require('../../../assets/images/title.png');

  const [email, setEmail] = useState<string>();
  const [userName, setUserName] = useState<string>('');
  const [intrest1, setIntrest1] = useState<string>('');
  const [intrest2, setIntrest2] = useState<string>('');
  const {currentUser, updateUser, updateInterest, getUserIntrests} =
    useAuthStore((state: AuthState) => {
      return {
        currentUser: state.currentUser,
        updateUser: state.updateUser,
        updateInterest: state.updateInterest,
        getUserIntrests: state.getUserIntrests,
      };
    });
  const onUpdate = () => {
    updateInterest(currentUser?.id, intrest1, '1');
    updateInterest(currentUser?.id, intrest2, '2');
    const user = {
      ...currentUser,
      email: email,
      userName: userName,
      intrest1: intrest1,
      intrest2: intrest2,
    } as User;
    updateUser(user);

    console.log('updated');
  };
  return (
    <View style={styles.main}>
      <Image source={title}></Image>
      <Text style={styles.text}>Personal:</Text>
      <View style={styles.container}>
        <TextInput
          style={{flex: 1}}
          placeholder={currentUser?.email}
          value={currentUser?.email}
          onChangeText={setEmail}></TextInput>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{flex: 1}}
          placeholder={currentUser?.userName}
          value={currentUser?.userName}
          onChangeText={setUserName}></TextInput>
      </View>
      <Text style={styles.text}>Interests:</Text>
      <View style={styles.container}>
        <TextInput
          style={{flex: 1}}
          placeholder={currentUser?.intrest1}
          value={intrest1}
          onChangeText={setIntrest1}></TextInput>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{flex: 1}}
          placeholder={currentUser?.intrest2}
          value={intrest2}
          onChangeText={setIntrest2}></TextInput>
      </View>
      <View style={styles.button}>
        <Pressable onPress={onUpdate}>
          <Text style={styles.update}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  update: {fontSize: 30, color: 'white', fontWeight: 'bold'},
  text: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'white',
    marginLeft: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    width: '80%',
    height: '8%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  container: {
    backgroundColor: 'white',
    width: '80%',
    height: '10%',
    borderRadius: 10,
  },
  main: {
    backgroundColor: '#733592',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
