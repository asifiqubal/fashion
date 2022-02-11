/**
 * @copyright Asif Iqubal
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ScreenAuthHome, ScreenLogin} from './screen';
import {useSelector} from 'react-redux';

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

const AppNavigator = props => {
  const {isUserAuthenticate} = useSelector(state => state._auth);
  return (
    <NavigationContainer>
      {isUserAuthenticate ? null : <StackAuth />}
    </NavigationContainer>
  );
};

export default AppNavigator;
