import React, { ReactNode } from 'react'
import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
let {width, height} = Dimensions.get('window');


interface ButtonProps {
  onPress?: () => void;
  text?: string;
  textStyle?: any;
  style?: any;
  children?: ReactNode;
}

export function PrimaryButton({text, textStyle, onPress, style}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.shadow,
        ...style,
        ...styles.center,
        ...styles.primaryButton,
      }}>
      <LinearGradient
        locations={[0, 0.25, 0.5, 1]}
        colors={['#667EEA', '#658DF0', '#659BF5', '#64B6FF']}
        style={{flex: 1,width:'100%',borderRadius: 6,...styles.center}}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        {text && (
          <Text style={textStyle ? textStyle : {color: '#fff', fontSize: 18}}>
            {text}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowColor: '#000',
    elevation: 10,
  },
  primaryButton: {
    height: 56,
    width: 245,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
