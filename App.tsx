import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/common/home-page';
import CompleteScreen from './src/components/common/complete';
import EmergencyScreen from './src/components/common/emergency';
import MainHomeScreen from './src/components/common/home';
import EditProfileScreen from './src/components/common/edit-profile';
import InstractionScreen from './src/components/common/instraction';
import SeflyTips from './src/components/common/sefly-tips';
import {SosAlertScreen} from './src/components/common/sos-alert';
import SettingScreen from './src/components/common/settings';
import SosAlertScreens from './src/components/common/sos_alert_screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="complete" options={{ headerShown: false }} component={CompleteScreen} />
        <Stack.Screen name='emergency' options={{ headerShown: false }} component={EmergencyScreen} />
        <Stack.Screen name='MainHome' options={{ headerShown: false }} component={MainHomeScreen} />
        <Stack.Screen name='editProfile' options={{ headerShown: false }} component={EditProfileScreen} />
        <Stack.Screen name='instructions' options={{ headerShown: false }} component={InstractionScreen} />
        <Stack.Screen name='sefly' options={{ headerShown: false }} component={SeflyTips} />
        <Stack.Screen name='sos' options={{ headerShown: false }} component={SosAlertScreen} />
        <Stack.Screen name='settings' options={{ headerShown: false }} component={SettingScreen} />
        <Stack.Screen name='sosAlert' options={{ headerShown: false }} component={SosAlertScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
