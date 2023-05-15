import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FavoriteList} from '../screens/favoriteList';

export const Favorites = () => {
  return (
    <View style={styles.main}>
      <View style={styles.view}>
        <Text style={styles.text}>Favorites</Text>
      </View>
      <FavoriteList></FavoriteList>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    borderRadius: 20,
    height: 60,
    width: '95%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {fontSize: 30, color: '#461160', fontWeight: 'bold'},
  main: {flex: 1, backgroundColor: '#733592'},
});
