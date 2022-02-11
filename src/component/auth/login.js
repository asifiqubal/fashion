import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
let {width, height} = Dimensions.get('window');

const Login = props => {
  return <View style={styles.container}></View>;
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});
