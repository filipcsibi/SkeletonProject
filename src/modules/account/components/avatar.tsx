import {Image, StyleSheet, Text, View} from 'react-native';
import {User} from '../../auth/types/users';
import {AuthState, useAuthStore} from '../../auth/store/useAuthStore';
interface Props {
  user: User | null;
}
export const Avatar = (props: Props) => {
  console.log(props.user?.profilePicture);
  //console.log('aaaa', props.user);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {props.user?.profilePicture ? (
        <Image
          source={{uri: props.user.profilePicture}}
          style={{flex: 1, borderRadius: 100}}></Image>
      ) : (
        <View>
          <Text style={{fontSize: 20, color: 'black', alignSelf: 'center'}}>
            NIMIC
          </Text>
        </View>
      )}
    </View>
  );
};
