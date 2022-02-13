/**
 * @copyright Asif Iqubal
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ScreenAuthHome, ScreenCart, ScreenLanding, ScreenLogin} from './screen';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthHome"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="AuthHome" component={ScreenAuthHome} />
    </Stack.Navigator>
  );
};
const StackApp = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <Stack.Screen name="Landing" component={ScreenLanding} />
      <Stack.Screen name="Cart" component={ScreenCart} />
    </Stack.Navigator>
  );
};

const AppNavigator = props => {
  const {isUserAuthenticate} = useSelector(state => state._auth);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {isUserAuthenticate ? <StackApp /> : <StackAuth />}
    </NavigationContainer>
  );
};

export default AppNavigator;
