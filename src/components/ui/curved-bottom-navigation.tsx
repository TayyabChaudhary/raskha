import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 3;
const HEIGHT = 70;

// Animated SVG Path Component
const AnimatedPath = Animated.createAnimatedComponent(Path);

const CurvedBottomNavigation: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const curveX = useSharedValue(TAB_WIDTH / 2); // Initial position of the curve's center

  useEffect(() => {
    // Animate the curve position when the selected tab changes
    const targetX = TAB_WIDTH * state.index + TAB_WIDTH / 2; // Calculate new center position
    curveX.value = withTiming(targetX, { duration: 300 }); // Animate to the new position
  }, [state.index]);

  // Function to generate the SVG path for the curve
  const generatePath = (curveCenter: number) => {
    const left = curveCenter - TAB_WIDTH / 2;
    const right = curveCenter + TAB_WIDTH / 2;

    return `
      M 0 0
      H ${left}
      C ${left + TAB_WIDTH / 4} ${HEIGHT} ${right - TAB_WIDTH / 4} ${HEIGHT} ${right} 0
      H ${width}
      V ${HEIGHT}
      H 0
      Z
    `;
  };

  // Use Animated Props with a callback to dynamically update the path
  const animatedProps = useAnimatedProps(() => {
    const curveCenter = curveX.value;
    return {
      d: generatePath(curveCenter), // Dynamically update the path
    };
  });

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Curved SVG Background */}
      <Svg width={width} height={HEIGHT + 20} style={styles.svg}>
        <AnimatedPath animatedProps={animatedProps} fill="#6200ee" />
      </Svg>

      {/* Tab Items */}
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={styles.tab}
            >
              <Text style={{ color: isFocused ? '#fff' : '#aaa', fontSize: 14 }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    height: HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CurvedBottomNavigation;
