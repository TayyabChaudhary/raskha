import React, { useState } from 'react'
import { Image, StyleSheet, Platform, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useRouter } from 'expo-router';

import ArrowLeftIcon from '../../../assets/svg/arrow-left';
import InputField from '../global/InputField';
import Button from '../global/Button';
import CameraIcon from '../../../assets/svg/camera-icon';
import ArrowIcon from '../../../assets/svg/arrow-icon';

const EditProfileScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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
                    <ArrowIcon onPress={() => navigation.navigate('MainHome')} />
                    <Text style={styles.title}>Edit Profile</Text>
                </View>
                <StatusBar style="light" />
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.inputContainer}>
                    <View style={styles.center}>
                        <View style={styles.avatar}>
                            <Image source={require('../../../assets/images/girl.png')} style={styles.imageGirl} />
                            <View style={styles.editOption}>
                                <TouchableOpacity onPress={() => navigation.navigate('editProfile')}>
                                    <CameraIcon />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <InputField
                        label="Full Name"
                        value={name}
                        onChangeText={setName}
                        placeholder="Isha Singh"
                    />
                    <InputField
                        label="Email Address"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="ishasingh864@gmail.com"
                    />
                    <InputField
                        label="Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="123 456 7890"
                    />
                    <Button
                        title="Continue"
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle} onPress={() => navigation.navigate('instructions')} />
                </ScrollView>
            </View>
        </View>
    )
}

export default EditProfileScreen;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#9F1F72',
        borderRadius: 100,
    },
    content: {
        backgroundColor: '#ECF0F3',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        position: 'relative',
        padding: 2,
    },
    inputContainer: {
        flexGrow: 1,
        padding: 25,
        paddingTop: 20,
        backgroundColor: '#ECF0F3',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        marginTop: 40
    },
    iconLeft: {
        width: 30,
        height: 30,
        objectFit: 'scale-down',
    },
    otpImage: {
        width: 260,
        height: Platform.OS === 'ios' ? 290 : 160,
        objectFit: 'contain'
    },
    buttonStyle: {
        width: '100%',
        marginVertical: 50,
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
        marginTop: Platform.OS === 'ios' ? 68 : 75,
        marginLeft: -6
    },
    title: {
        fontSize: 24,
        fontWeight: Platform.OS === 'ios' ? 700 : 800,
        color: "#fff",
    },
    rightFemale: {
        height: 210,
        width: 150,
        top: 20,
        right: 0,
        position: 'absolute',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        position: 'relative',
        marginTop: 30,
        marginBottom: 20
    },
    editOption: {
        position: 'absolute',
        bottom: -14,
        right: -6,
        zIndex: 10,
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        borderRadius: 100,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#9F1F72'
    },
    imageGirl: {
        objectFit: 'contain',
        width: 90,
        height: 90,
        borderRadius: 100
    },
    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
