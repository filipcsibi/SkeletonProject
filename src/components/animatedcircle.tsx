import {View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
interface Props {
  index: number;
}

export const AnimatedCircle = (props: Props) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      position: 'absolute',
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    scale.value = withDelay(
      300 * props.index,
      withRepeat(withTiming(3, {duration: 1000}), -1, true),
    );
    opacity.value = withDelay(
      300 * props.index,
      withRepeat(withTiming(0.2 * props.index, {duration: 1000}), -1, true),
    );
  }, []);
  return (
    <Animated.View
      style={[
        {
          height: 100,
          width: 100,
          borderRadius: 100,
          backgroundColor: 'blue',
          position: 'absolute',
        },
        rStyle,
      ]}></Animated.View>
  );
};
