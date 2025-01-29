import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, ScrollView, Platform, Alert, Dimensions } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Raleway_400Regular } from "@expo-google-fonts/raleway"
import ArrowLeftIcon from '../../../assets/svg/arrow-left';
import InputField from '../global/InputField';
import Button from '../global/Button';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("window");

const CompleteScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({ name: '', email: '' });

    const validateForm = () => {
        let valid = true;
        const newErrors: any = {};

        if (!name.trim()) {
            newErrors.name = 'Full name is required.';
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email address is required';
            valid = false;
        } else if (!emailRegex.test(email.trim())) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleContinue = () => {
        if (validateForm()) {
            navigation.navigate('emergency');
        } else {
           
        }
    };


    return (
        <SafeAreaProvider style={styles.main}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/left-female.png')} // Replace with your image URL or local image source
                    style={styles.image} />
                <Image source={require('../../../assets/images/right-female.png')} // Replace with your image URL or local image source
                    style={styles.rightimage} />
                <View style={styles.titleContainer}>
                    <ArrowLeftIcon onPress={() => navigation.navigate('Home')} />
                    <Text style={[styles.title]}>Complete Your Profile</Text>
                </View>
                <StatusBar style="light" />
            </View>
            <ScrollView contentContainerStyle={styles.inputContainer} scrollEnabled={false}>
                <View style={{ flex: 2.3 }}>
                    <InputField
                        label="First Name*"
                        value={name}
                        onChangeText={(text: string) => {
                            setName(text);
                            if (text.trim()) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Isha Singh"
                        error={errors.name}
                    />
                    {errors.name ? <Text style={{ color: '#CB0003', fontWeight: '300' }}>{errors.name}</Text> : null}
                    
                    <InputField
                        label="Email Address*"
                        value={email}
                        onChangeText={(text: string) => {
                            setEmail(text);
                            if (text.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
                                setErrors({ ...errors, email: '' });
                            }
                        }}
                        placeholder="ishasingh864@gmail.com"
                        error={errors.email}
                    />
                    {errors.email ? <Text style={{ color: '#CB0003', fontWeight: '300'}}>{errors.email}</Text> : null}

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../../assets/images/complete.png')} // Replace with your image URL or local image source
                            style={styles.otpImage}
                        />
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        title="Continue"
                        onPress={handleContinue}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle}
                    />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default CompleteScreen

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#9F1F72',
        borderRadius: 100,
    },
    inputContainer: {
        flexGrow: 1,
        padding: 25,
        paddingTop: 20,
        backgroundColor: '#ECF0F3',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'relative'
    },
    container: {
        position: 'relative',
        width: '100%',
        backgroundColor: "#9F1F72",
        height: 180,
        overflow: "hidden",
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30
    },
    otpImage: {
        width: 280,
        height: Platform.OS === 'ios' ? width * 0.60 : 180,
        objectFit: 'contain',
        marginBottom: 0,
    },
    buttonStyle: {
        width: '100%',
        marginTop: width * 0.01,
        boxShadow: '0px 4px 20px 0px rgba(159, 31, 114, 0.33)',
    },
    textStyle: {
        fontSize: 18,
    },
    image: {
        width: 140,
        height: 280,
        position: 'absolute',
        top: -38,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'contain', // Ensures the image covers the whole container
    },
    rightimage: {
        width: 140,
        height: 280,
        position: 'absolute',
        top: -38,
        right: 0,
        bottom: 0,
        resizeMode: 'contain', // Ensures the image covers the whole container
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: Platform.OS === 'ios' ? width * 0.14 : width * 0.14,
        marginLeft: -0
    },
    title: {
        fontSize: width * 0.05,
        fontWeight: 600,
        color: "#fff",
        fontFamily: `${Raleway_400Regular}`
    },
    rightFemale: {
        height: 210,
        width: 150,
        top: 20,
        right: 0,
        position: 'absolute',
    },

    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
