import {StyleSheet, Text, View, Dimensions, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LeftArrow from '../../assets/icon/svg/left_arrow';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomeInput, PrimaryButton} from '../common/ui_component';
import {useDispatch} from 'react-redux';
import {RdxSetUserAuthenticationStatus} from '../../rdx/action/auth';
let {width, height} = Dimensions.get('window');

const Login = props => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [currentScreen, setCurrentScreen] = useState(0);
  const sliderRef = useRef();
  const dispatch = useDispatch();

  function LoginHandeler() {
    try {
      //@TODO: Send user otp
      // if (phone.length !== 11) {
      //   throw new Error('Please Provied a valid phone number.');
      // }
      setCurrentScreen(1);
    } catch (e) {
      console.warn(e);
    }
  }
  function AuthenticationHandeler() {
    try {
      //@TODO: Verify user otp
      // if (otp.length !== 4) {
      //   throw new Error('Please Provied a valid otp.');
      // }

      dispatch(RdxSetUserAuthenticationStatus(true));
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    console.log(currentScreen);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({x: width * currentScreen, animated: true});
    }
  }, [currentScreen]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            currentScreen === 0
              ? props.navigation.goBack()
              : setCurrentScreen(0)
          }>
          <LeftArrow />
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        ref={sliderRef}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        ontentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        bounces={false}>
        <View
          style={{
            height: 300,
            justifyContent: 'space-evenly',
            marginTop: 12,
            width: width,
            paddingHorizontal: 16,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={{flex: 1}}>
            <CustomeInput
              label="Phone"
              value={phone}
              placeHolderText="Enter Phone number"
              keyboardType="numeric"
              onChange={val => setPhone(val)}
            />
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton
              text="Login"
              style={{width: width * 0.9}}
              onPress={LoginHandeler}
            />
          </View>
        </View>
        <View
          style={{
            height: 300,
            justifyContent: 'space-evenly',
            marginTop: 12,
            width: width,
            paddingHorizontal: 16,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.title}>Verify</Text>
          </View>
          <View style={{flex: 1}}>
            <CustomeInput
              label="OTP"
              value={phone}
              placeHolderText="Enter OTP"
              keyboardType="numeric"
              onChange={val => setPhone(val)}
            />
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton
              text="Verify"
              style={{width: width * 0.9}}
              onPress={AuthenticationHandeler}
            />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  backButton: {
    width: 50,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  title: {
    color: '#000',
    fontSize: 30,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
});
