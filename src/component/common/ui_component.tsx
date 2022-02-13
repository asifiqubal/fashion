import React, { ReactNode } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, Dimensions, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
let {width, height} = Dimensions.get('window');


interface ButtonProps {
  onPress?: () => void;
  text?: string;
  textStyle?: any;
  style?: any;
  children?: ReactNode;
}

interface CustomeInputProps {
  onChange?: (string) => void;
  label?: string;
  labelStyle?: any;
  style?: any;
  value?: string;
  keyboardType?:'numeric' | 'email-address' | 'default';
  placeHolderText?: string;
}

export function PrimaryButton({text, textStyle, onPress, style}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.shadow,
        ...styles.center,
        ...styles.primaryButton,
        ...style,
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
export function CustomeInput({label,labelStyle,onChange,style,value,keyboardType, placeHolderText}:CustomeInputProps) {
  const [text, setText] = useState(value?value:'');

  useEffect(()=>{
    if(onChange)
    {
      onChange(text)
    }
  },[text])

  return (
    <View>
      {
        label &&
        <Text style={[styles.inputLabel,labelStyle]}>{label}</Text>

      }
      <TextInput
        value={text}
        keyboardType={keyboardType?keyboardType:'default'}
        onChangeText={(val) => setText(val.trim())}
        placeholder={placeHolderText?placeHolderText:'Enter text here'}
        placeholderTextColor={'#747474'}
        style={[styles.inputView,style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
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
  inputView:{
    color: '#000',
    fontSize: 18,
    padding: 4,
    borderColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  inputLabel:{
    color:'#747474',
     fontSize:14,
     paddingHorizontal:4
  }
});
