import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
import {useState} from 'react';
import {User} from '../../auth/types/users';

export const EditScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const {currentUser, updateUser} = useAuthStore((state: AuthState) => {
    return {
      currentUser: state.currentUser,
      updateUser: state.updateUser,
    };
  });
  const onUpdate = () => {
    const user = {
      ...currentUser,
      email: email,
      userName: userName,
    } as User;
    updateUser(user);
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TextInput
          style={{flex: 1}}
          placeholder={currentUser?.email}
          value={email}
          onChangeText={setEmail}></TextInput>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{flex: 1}}
          placeholder={currentUser?.userName}
          value={userName}
          onChangeText={setUserName}></TextInput>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Pressable onPress={onUpdate}>
            <Text>Update</Text>
          </Pressable>
        </View>
        <View style={styles.button}>
          <Pressable></Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    width: '40%',
    height: '5%',
  },
  container: {
    backgroundColor: 'white',
    width: '80%',
    height: '5%',
  },
  main: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 300,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
});
