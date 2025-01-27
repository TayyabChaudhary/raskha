import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { modalStyles } from '../../../styles/modal-styles'
import CloseIcon from '../../../../assets/svg/close-icon'
import Button from '../Button'

export default function StopAudioModal({ successFullyRegister, setsuccessFullyRegister, navigation }: any) {
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
                        <Text style={styles.text}>Recording sent to your email. You can now play or share it.</Text>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 20 }}>
                        <Image source={require('../../../../assets/images/record.png')} />
                    </View>
                    <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 5, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>02:28</Text>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 20 }}>
                        <Image source={require('../../../../assets/images/progress.png')} />
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 20 }}>
                        <Image source={require('../../../../assets/images/control.png')} />
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
        paddingBottom: 50,
        paddingRight: 30,
        height: 'auto',
        width: '80%',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 16,
        color: '#514A4F',
        fontWeight: 400,
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 20,
    },
})