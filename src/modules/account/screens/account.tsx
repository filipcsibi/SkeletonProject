import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Avatar} from '../components/avatar';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';
import {User} from '../../auth/types/users';

export const Account = () => {
  const {currentUser, updateUser} = useAuthStore((state: AuthState) => {
    return {
      currentUser: state.currentUser,
      updateUser: state.updateUser,
    };
  });
  console.log(currentUser);
  const [image, setImage] = useState<string>('');

  const onPickImage = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    });
    console.log('image', image);

    const user = {
      ...currentUser,
      profilePicture: `data:${image.mime};base64,${image.data}`,
    } as User;

    updateUser(user);
  };

  return (
    <View style={styles.main}>
      <Pressable style={styles.avatar} onPress={onPickImage}>
        <Avatar user={currentUser} />
      </Pressable>
      <View>
        <Text style={{fontSize: 20, color: 'white'}}>My Account</Text>
      </View>
      <View style={styles.container}>
        <Text>{currentUser?.email}</Text>
      </View>
      <View style={styles.container}>
        <Text>{currentUser?.userName}</Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    borderColor: 'green',
    borderWidth: 2,
    width: '35%',
    height: '20%',
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 50,
  },
});
