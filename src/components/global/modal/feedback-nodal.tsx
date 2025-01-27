import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import { modalStyles } from '../../../styles/modal-styles'
import CloseIcon from '../../../../assets/svg/close-icon'
import { TextInput } from 'react-native'
import Button from '../Button'

import {
    useFonts,
    Raleway_100Thin
} from "@expo-google-fonts/raleway";

export default function FeedbackModal({ successFullyRegister, setsuccessFullyRegister, navigation }: any) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false); // To track validation errors


    const [fontsLoaded] = useFonts({
        Raleway_100Thin,
    });

    const handleSubmit = () => {
        if (inputValue.length < 100) {
            setError(true); // Set error if input is less than 100 characters
        } else {
            setError(false);
            navigation.navigate('sos'); // Navigate to the next screen
        }
    };
    return (
        <Modal
            visible={successFullyRegister}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setsuccessFullyRegister(false)}
        >
            <View style={modalStyles.modalBackground}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={modalStyles.closeIcon}
                        onPress={() => setsuccessFullyRegister(false)}
                    >
                        <CloseIcon />
                    </TouchableOpacity>
                    <View style={modalStyles.image}>
                        <Text style={{ fontSize: 18, color: '#514A4F', fontWeight: 600, textAlign: 'center' }}>Help us to improve!</Text>
                        <Text style={styles.text}>How would you like to describe your experience with our RakshaSutra App?</Text>
                        <View style={styles.grid}>
                            <View style={styles.box}>
                                <Text>😰</Text>
                                <Text style={{ fontSize: 12, marginTop: 5, color: '#514A4F' }}>Terrible</Text>
                            </View>
                            <View style={styles.box}>
                                <Text>☹️</Text>
                                <Text style={{ fontSize: 12, marginTop: 5, color: '#514A4F' }}>Bad</Text>
                            </View>
                            <View style={styles.box}>
                                <Text>😐</Text>
                                <Text style={{ fontSize: 12, marginTop: 5, color: '#514A4F' }}>Okay</Text>
                            </View>
                            <View style={styles.box}>
                                <Text>😊</Text>
                                <Text style={{ fontSize: 12, marginTop: 5, color: '#514A4F' }}>Good</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18, color: '#514A4F', fontWeight: 400, textAlign: 'left', marginTop: 20 }}>What’s your overall experience?</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            style={[styles.input, error && { borderColor: '#CB0003' }, { fontFamily: "Roboto_400Regular" }]}
                            placeholder='Please share your thoughts...'
                            placeholderTextColor="#514A4F"
                            value={inputValue}
                            onChangeText={(text) => setInputValue(text)}
                        />
                        <Text style={[styles.minText, error && { color: '#CB0003' }]}>Min 100 character</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 16, justifyContent: 'flex-end' }}>
                            <Button
                                title="Cancel"
                                buttonStyle={styles.outlineButton}
                                textStyle={styles.outlineText} onPress={() => setsuccessFullyRegister(false)} />
                            <Button
                                title="Submit"
                                buttonStyle={styles.buttonStyle}
                                textStyle={styles.textStyle} onPress={handleSubmit} />

                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 40,
        paddingLeft: 30,
        paddingBottom: 30,
        paddingRight: 30,
        height: 'auto',
        width: '90%',
        alignItems: 'center',
        position: 'relative'
    },
    input: {
        height: 130,
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#B1B1B1',
        borderRadius: 10,
        marginTop: 18,
        padding: 18,
    },
    minText: {
        fontSize: 13, color: '#514A4F', fontWeight: 400, textAlign: 'right', marginTop: 10
    },
    text: {
        fontSize: 16,
        color: '#514A4F',
        fontWeight: 400,
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 10,
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 18,
    },
    box: {
        height: 70,
        width: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B1B1B1',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonStyle: {
        width: Platform.OS === 'ios' ? 'auto' : 'auto',
        textAlign: 'center',
        boxShadow: '0px 4px 20px 0px rgba(159, 31, 114, 0.33)',
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    textStyle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 500
    },
    outlineButton: {
        width: Platform.OS === 'ios' ? 100 : 250,
        textAlign: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100,
    },
    outlineText: {
        fontSize: 14,
        color: '#000',
        fontWeight: 300
    }
})