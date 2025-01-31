import React, { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import Button from '../global/Button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home-page';
import CompleteScreen from './complete';
import MainHomeScreen from './home';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import HomeIcon from '../../../assets/svg/home-icon';
import Users from '../../../assets/svg/users';
import SettingsIcon from '../../../assets/svg/settings-icon';
import HomeFillWhite from '../../../assets/icons/home-fill-white';
import ContactFillWhite from '../../../assets/icons/contacts-fill-white';
import SettingsFillWhite from '../../../assets/icons/settings-fill-white';
import ProfileIcon from '../../../assets/svg/profile-icon';
import UserFillWhiteIcon from '../../../assets/icons/user-fill-white';
import SettingScreen from './settings';

const Tab = createBottomTabNavigator();

const TabArr = [
  { route: 'Home', label: "Home", type: 'Home', activeIcon: <HomeFillWhite />, icon: <HomeIcon />, inActiveIcon: require("../../../assets/images/boy.png"), component: MainHomeScreen },
  { route: 'MainHome', label: "Contact", type: 'MainHome', icon: <Users />, activeIcon: <ContactFillWhite />, inActiveLabel: 'Hello', component: MainHomeScreen },
  { route: 'complete', label: "Profile", type: 'complete', icon: <ProfileIcon />, activeIcon: <UserFillWhiteIcon />, inActiveLabel: <ContactFillWhite />, component: MainHomeScreen },
  { route: 'editProfile', label: "Setting", type: 'editProfile', icon: <SettingsIcon />, activeIcon: <SettingsFillWhite />, inActiveLabel: 'Hello', component: SettingScreen },
]

function MyTabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const [translateX] = useState(new Animated.Value(0));

  const translateTab = (index: any) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    translateTab(state.index)
  }, [state.index])

  return (
    <View style={styles.tabbarContainer}>
      {/* <Animated.View style={styles.slidingTabContainer}>
        <Animated.View style={[styles.slidingTab, { transform: [{ translateX }] }]} />
      </Animated.View> */}
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tab = TabArr.find((tab) => tab.route === route.name);
        const tabIcon = isFocused ? tab?.activeIcon : tab?.icon;
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}
          >
            <TabIcon tabIcon={tabIcon} isFocused={isFocused} label={label} index={state.index} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabIcon = ({ isFocused, tabIcon, label, index }: any) => {
  const [translateY] = useState(new Animated.Value(isFocused ? -14 : 0));
  const { colors } = useTheme();
  const translateIcon = (val: number) => {
    Animated.spring(translateY, {
      toValue: isFocused ? -14 : 0,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    if (isFocused) {
      translateIcon(-14)
    } else {
      translateIcon(0)
    }
  }, [index]);


  return (
    <>
      <Animated.View style={{ transform: [{ translateY }], position: 'relative' }}>
        <View style={{ position: 'relative' }}>
          <View style={[styles.circleCenter, { marginBottom: isFocused ? 44 : 3, marginLeft: isFocused ? -20 : 0, backgroundColor: isFocused ? '#9F1F72' : '', }]}>
            {React.isValidElement(tabIcon) && tabIcon}
          </View>
          {isFocused && <Image source={require('../../../assets/images/path.png')} style={styles.circlePath} />}
        </View>

      </Animated.View>
      {isFocused && (
        <Text style={{ color: '#FFFFFF', position: 'absolute', bottom: 20, textAlign: 'center', fontSize: 14, fontWeight: 500 }}>
          {label}
        </Text>
      )}
    </>
  )
}

const { width } = Dimensions.get("window");
const MARGIN = 16;
const TAB_BAR_WIDTH = width - 2 * MARGIN;
const TAB_WIDTH = TAB_BAR_WIDTH / TabArr.length;

export const SosAlertScreen = ({ navigation }: any) => {

  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}
      tabBar={props => <MyTabBar {...props} />}>
      {TabArr.map((_, index) => (
        <Tab.Screen key={index} name={_.route} component={_.component}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const icon = focused ? _.activeIcon : _.inActiveIcon;
              return React.isValidElement(icon) ? (
                icon
              ) : (
                <Image source={icon} style={{ width: size, height: size, tintColor: color }} />
              );
            },
          }}></Tab.Screen>
      ))}
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  tabbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    height: 88,
    backgroundColor: '#9F1F72',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100
  },
  slidingTabContainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  slidingTab: {
    width: 70, // Ensure the circle is a perfect square
    height: 70,
    borderRadius: 35, // Half of the width/height for a circle
    backgroundColor: '#9F1F72', // Circle background
    bottom: 26, // Ensure proper positioning
    position: 'relative',
    zIndex: 20
  },
  circleCenter: {
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    width: 60, // Example width
    height: 60, // Example height
    borderRadius: 50, // Makes it a circle
    marginTop: -5,
  },
  circlePath: {
    width: 105,
    height: 100,
    borderRadius: 100,
    objectFit: 'fill',
    position: 'absolute',
    left: -43,
    top: -38,
    zIndex: -3
  }
})