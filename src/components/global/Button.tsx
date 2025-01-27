import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { Raleway_400Regular } from "@expo-google-fonts/raleway";
interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  icon
}) => {
  const [scale] = useState(new Animated.Value(1));

  // Handle Button Press In Animation
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  };

  // Handle Button Release Animation
  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  };

  return (
    <Animated.View style={[styles.shadow, { transform: [{ scale }] }]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.button, buttonStyle]}
      >
        {icon && <Animated.View style={styles.iconContainer}>{icon}</Animated.View>}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(159, 31, 114, 0.33)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  button: {
    backgroundColor: '#9F1F72',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Align icon and text horizontally
    gap: 10, // Add spacing between icon and text
  },
  iconContainer: {
    marginRight: 0, // Spacing between icon and text if `gap` isn't supported
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'Raleway_400Regular',
  },
});

export default Button;
