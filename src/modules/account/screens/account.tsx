import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {Avatar} from '../components/avatar';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
import ImagePicker from 'react-native-image-crop-picker';
import {useState, useEffect} from 'react';
import {User} from '../../auth/types/users';
import Animated from 'react-native-reanimated';
import {AnimatedCircle} from '../../../components/animatedcircle';

export const Account = () => {
  const {currentUser, updateUser, getUserIntrests} = useAuthStore(
    (state: AuthState) => {
      return {
        currentUser: state.currentUser,
        updateUser: state.updateUser,
        getUserIntrests: state.getUserIntrests,
      };
    },
  );

  const avatar = require('../../../assets/images/pozaavatar.jpeg');
  const ab = true;

  return (
    <View style={styles.main}>
      <Text style={styles.username}>Hi, {currentUser?.userName}!</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {[1, 2, 3].map(item => (
          <AnimatedCircle index={item}></AnimatedCircle>
        ))}
        <Pressable style={styles.avatar}>
          {ab ? (
            <Image source={avatar} style={styles.avatarphoto}></Image>
          ) : (
            <Text>no</Text>
          )}
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>My Account</Text>
      </View>
      <View style={styles.container}>
        <Text>{currentUser?.email}</Text>
      </View>
      <View style={styles.container}>
        <Text>{currentUser?.userName}</Text>
      </View>
      <View>
        <Text style={styles.text}>Intrests</Text>
      </View>
      <View style={styles.container}>
        <Text>{currentUser?.intrest1}</Text>
      </View>
      <View style={styles.container}>
        <Text>{currentUser?.intrest2}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  username: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -100,
  },
  avatarphoto: {
    resizeMode: 'cover',
    width: 175,
    height: 175,
    borderRadius: 100,
  },
  text: {fontSize: 20, color: 'white'},
  button: {
    backgroundColor: 'red',
    width: '40%',
    height: '5%',
  },
  container: {
    backgroundColor: 'white',
    width: '80%',
    height: '5%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
  },
  main: {
    backgroundColor: '#733592',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    flex: 0,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor: 'white',
    // marginBottom: 30,
  },
});

//const [image, setImage] = useState<string>('');

// const onPickImage = async () => {
//   const image = await ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     cropping: true,
//     includeBase64: true,
//     mediaType: 'photo',
//   });
//   console.log('image', image);

//   const user = {
//     ...currentUser,
//     profilePicture: `data:${image.mime};base64,${image.data}`,
//   } as User;

//   updateUser(user);
// };
