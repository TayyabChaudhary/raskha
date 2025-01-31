import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Get screen dimensions for responsiveness
const { width } = Dimensions.get('window');

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const toValue = isExpanded ? 0 : 1;

    // Animate the height of the accordion
    Animated.timing(animation, {
      toValue,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false, // Use false because height changes don't work with native driver
    }).start();

    setIsExpanded(!isExpanded);
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 90], // Adjust 150 to the max content height
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        {isExpanded ? (
          <Svg width="14" height="9" viewBox="0 0 14 9" fill="none">
            <Path d="M1.48193 8.23224L7.35699 1.51788L13.2321 8.23224" stroke="#090006" stroke-width="1.46877" stroke-linecap="round" stroke-linejoin="round" />
          </Svg>
        ): (
          <Svg width="14" height="9" viewBox="0 0 14 9" fill="none">
          <Path d="M1.48193 1.51782L7.35699 8.23218L13.2321 1.51782" stroke="#090006" stroke-width="1.46877" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
        )}

      </TouchableOpacity>

      {/* Content */}
      <Animated.View
        style={[
          styles.contentContainer,
          { height: heightInterpolation },
        ]}
      >
        <View style={styles.content}>{children}</View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginBottom: 14,
    marginHorizontal: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B1B1B1',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#000',
  },
  contentContainer: {
    overflow: 'hidden',
  },
  content: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
});
