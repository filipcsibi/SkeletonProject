import {useState} from 'react';
import {Pressable, Text, TextInput, View, StyleSheet} from 'react-native';
interface Props {
  onLogin: (email: string, password: string) => void;
}
export const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    props.onLogin(email, password);
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TextInput value={email} onChangeText={setEmail}></TextInput>
      </View>
      <View style={styles.container}>
        <TextInput value={password} onChangeText={setPassword}></TextInput>
      </View>
      <View style={styles.button}>
        <Pressable onPress={onPress}>
          <Text style={{textAlign: 'center'}}>PRESS ME</Text>
        </Pressable>
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
  },
  main: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
