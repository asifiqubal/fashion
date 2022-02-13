import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Progress = ({step, steps, height}) => {
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);
  return (
    <View
      style={{
        height,
        backgroundColor: '#fff',
        borderRadius: height,
        overflow: 'hidden',
      }}>
      <Animated.View
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
        }}
        style={{
          height,
          borderRadius: height,
          position: 'absolute',
          width: '100%',
          left: 0,
          top: 0,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}>
        <LinearGradient
          locations={[0, 0.25, 0.5, 1]}
          colors={['#667EEA', '#658DF0', '#659BF5', '#64B6FF']}
          style={{flex: 1, width: '100%', borderRadius: 6, ...styles.center}}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}></LinearGradient>
      </Animated.View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({});
