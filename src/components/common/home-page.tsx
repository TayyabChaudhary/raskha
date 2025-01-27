import React, { useState } from 'react'
import { Image, View, Text, ScrollView, Alert } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useRouter } from 'expo-router';

import ArrowLeftIcon from '../../../assets/svg/arrow-left';
import InputField from '../global/InputField';
import OTPInput from '../global/OTPInput';
import Button from '../global/Button';
import { styles } from '../../styles/home-page';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otp, setOtp] = useState('');
  const validateInput = () => {
    // Validate phone number (non-empty and valid format)
    const phoneRegex = /^[0-9]{10}$/; // Example regex for a 10-digit phone number
    if (!phoneNumber) {
      setError('Invalid phone number. Please enter a valid 10-digit number.');
      return false;
    } else if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }

    // Clear error if validation passes
    setError('');
    return true;
  };

  /* ------- Valdation OTP Code -------- */
  const validateOtp = () => {
    if (!otp || otp.length !== 5) {
      setOtpError('Please enter the 5-digit OTP.');
      return false;
    }
    setOtpError('');
    return true;
  };

  /* ------------------- Handle Continue Button. ---------------- */
  const handleContinue = () => {
    const isPhoneValid = validateInput();
    const isValidOtp = validateOtp();

    // Simulate OTP verification
    if (validateInput()) {
      navigation.navigate('complete'); // Proceed to the next screen
    }
  };

  const router = useRouter();
  const handleResend = () => {
    Alert.alert('Resend Code', 'A new code has been sent to your phone.');
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/left-female.png')} // Replace with your image URL or local image source
          style={styles.image}
        />
        <Image
          source={require('../../../assets/images/right-female.png')} // Replace with your image URL or local image source
          style={styles.rightimage}
        />
        <View style={styles.titleContainer}>
          <ArrowLeftIcon onPress={() => navigation.navigate('')} />
          <Text style={styles.title}>Verify Phone Number</Text>
        </View>
        <StatusBar style="light" />
      </View>
      <View style={styles.content}>
        <SafeAreaProvider style={styles.inputContainer}>
          <View style={{ flex: 2.3 }}>
            <InputField
              label="Phone Number*"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="123 456 789"
              error={error}
            />
            {error ? <Text style={{ fontSize: 14, width: 280, lineHeight: 23, color: '#CB0003', fontWeight: 300 }}>{error}</Text> : null}
            <OTPInput
              label="Enter OTP"
              codeLength={5}
              countdown={60}
              onResend={handleResend}
              error={otpError}
            />
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/Enter-OTP.png')} // Replace with your image URL or local image source
                style={styles.otpImage}
              />
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Button
              title="Continue"
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle} onPress={handleContinue} />
          </View>
        </SafeAreaProvider>
      </View>
    </View>
  )
}

export default HomeScreen;
