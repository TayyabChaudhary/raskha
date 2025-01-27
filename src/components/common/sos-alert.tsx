import React, { useEffect, useState } from 'react'
import { Image, View, Text, ScrollView, Platform, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ArrowsIcon } from '../../../assets/svg/arrow-left';
import Button from '../global/Button';
// import { styles } from '../../styles/sos-alert';
import StopAudioModal from '../global/modal/stop-audio';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurvedBottomNavigation from '../ui/curved-bottom-navigation';
import HomeScreen from './home-page';
import CompleteScreen from './complete';
import MainHomeScreen from './home';
import { Icon } from 'react-native-vector-icons/Icon';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import HomeIcon from '../../../assets/svg/home-icon';
import EditProfileScreen from './edit-profile';
import Users from '../../../assets/svg/users';
import SettingsIcon from '../../../assets/svg/settings-icon';
import HomeFillWhite from '../../../assets/icons/home-fill-white';
import ContactFillWhite from '../../../assets/icons/contacts-fill-white';
import SettingsFillWhite from '../../../assets/icons/settings-fill-white';
import ProfileIcon from '../../../assets/svg/profile-icon';
import ProfileFillIcon from '../../../assets/svg/profile-icon';

const Tab = createBottomTabNavigator();

const TabArr = [
  { route: 'Home', label: "Home", type: 'Home', activeIcon: <HomeFillWhite />, icon: <HomeIcon />, inActiveIcon: require("../../../assets/images/boy.png"), component: MainHomeScreen },
  { route: 'MainHome', label: "MainHome", type: 'MainHome', icon: <Users />, activeIcon: <ContactFillWhite />, inActiveLabel: 'Hello', component: HomeScreen },
  { route: 'complete', label: "complete", type: 'complete', icon: <ProfileIcon />, activeIcon: <ProfileFillIcon />, inActiveLabel: <ContactFillWhite />, component: CompleteScreen },
  { route: 'editProfile', label: "editProfile", type: 'editProfile', icon: <SettingsIcon />, activeIcon: <SettingsFillWhite />, inActiveLabel: 'Hello', component: EditProfileScreen },


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
      <Animated.View style={styles.slidingTabContainer}>
        <Animated.View style={[styles.slidingTab, { transform: [{ translateX }] }]} />
      </Animated.View>
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
      <Animated.View style={{ transform: [{ translateY }],  alignItems: 'center', position: 'relative' }}>
      {isFocused && (
        <Image
          source={require('../../../assets/images/path.png')} // Circular background for selected tab
          style={{
            position: 'absolute',
            width: 70,
            height: 70,
            bottom: 7,
            left: -32, // Offset from the left side
            zIndex: -2, // Behind the icon
          
          }}
        />
      )}
        <View style={{ marginBottom: isFocused ? 20 : 3, marginLeft: isFocused ? -20 : 0 }}>
        {React.isValidElement(tabIcon) && tabIcon}
        </View>
        {/* {isFocused && (
          <Text style={{ color: 'red', textAlign: 'center' }}>
            {typeof tabIcon?.label === 'string' ? tabIcon.label : ''}
          </Text>
        )} */}

      </Animated.View>
    </>
  )
}

const { width } = Dimensions.get("window");
const MARGIN = 16;
const TAB_BAR_WIDTH = width - 2 * MARGIN;
const TAB_WIDTH = TAB_BAR_WIDTH / TabArr.length;

export const SosAlertScreen = ({ navigation }: any) => {
  const [stopAudio, setstopAudio] = useState(false);
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
    height: 72,
    backgroundColor: '#9F1F72',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    alignItems: 'center', // Center icon horizontally
    justifyContent: 'center', // Center icon vertically
    bottom: 26, // Ensure proper positioning
    position: 'relative',
    zIndex: 600
  }
})