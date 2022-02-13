import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {PrimaryButton} from '../common/ui_component';
let {width, height} = Dimensions.get('window');

const AuthHome = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.boltText}>Welcome to Bolt</Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/img/img_auth_home.png')}
          style={styles.img}
        />
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <PrimaryButton
          text="Login With Phone"
          onPress={() => props.navigation.navigate('Login')}
        />
        <Text style={styles.boltText}>Shop With Us</Text>
      </View>
    </View>
  );
};

export default AuthHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  boltText: {
    color: '#707070',
    fontSize: 20,
    textAlign: 'center',
  },
  img: {
    width: width * 0.9,
  },
});
