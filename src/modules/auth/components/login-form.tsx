import {useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {PersonIcon, QuestionIcon} from '../../../assets/icons';

interface Props {
  onLogin: (email: string, password: string) => void;
}
export const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    props.onLogin(email, password);
  };
  const bgimage = require('../../../assets/images/backgroundLogin.jpg');
  const up = require('../../../assets/images/up.png');
  const down = require('../../../assets/images/down.png');
  const social = require('../../../assets/images/social.png');
  return (
    <ImageBackground source={bgimage} style={styles.main}>
      <View style={styles.mainview}>
        <Image source={up} style={{transform: [{rotate: '-20deg'}]}}></Image>
        <Image
          source={down}
          style={{marginBottom: 60, transform: [{rotate: '-20deg'}]}}></Image>

        <View style={styles.email}>
          <PersonIcon
            width={30}
            height={30}
            fill={'white'}
            style={styles.icon}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.password}>
          <QuestionIcon
            width={30}
            height={30}
            fill={'white'}
            style={styles.icon}></QuestionIcon>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={styles.button}>
          <Pressable onPress={onPress}>
            <Text style={styles.login}>Log in</Text>
          </Pressable>
        </View>
      </View>
      <Image source={social} style={styles.social}></Image>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    color: '#733592',
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainview: {
    height: '60%',
    width: '75%',
    backgroundColor: 'transparent',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    width: 1000,
    height: 100,
    resizeMode: 'center',
    right: 10,
  },
  start: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#733592',
    marginBottom: 30,
  },
  icon: {left: 10, top: 22},
  input: {
    marginLeft: 35,
    bottom: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    height: '10%',
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 30,
    justifyContent: 'center',
  },
  email: {
    backgroundColor: '#733592',
    width: '100%',
    height: '10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  password: {
    backgroundColor: '#733592',
    width: '100%',
    height: '10%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#283AFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
