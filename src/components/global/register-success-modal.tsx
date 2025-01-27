import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { modalStyles } from '../../styles/modal-styles'
import CloseIcon from '../../../assets/svg/close-icon'


export default function RegistrationSuccessFullyModal({ successFullyRegister, setsuccessFullyRegister }: any) {
    return (
        <Modal
            visible={successFullyRegister}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setsuccessFullyRegister(false)}
        >
            <View style={modalStyles.modalBackground}>
                <View style={modalStyles.registerModalContent}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={modalStyles.closeIcon}
                        onPress={() => setsuccessFullyRegister(false)}
                    >
                        <CloseIcon />
                    </TouchableOpacity>
                    <View style={modalStyles.image}>
                        <Image source={require("../../../assets/images/reg-success.png")} />
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 20, color: '#514A4F', fontWeight: 600 }}>Registration Successful!</Text>
                    <Text style={{ fontSize: 18, marginVertical: 3, color: '#514A4F', fontWeight: 200, textAlign: 'center' }}>Welcome to <Text style={{ color: '#9F1F72', fontStyle: 'italic' }}>RakshaSutra</Text>! You're all set to get started.</Text>
                </View>
            </View>
        </Modal>
    )
}