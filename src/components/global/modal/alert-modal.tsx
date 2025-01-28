import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { modalStyles } from '../../../styles/modal-styles'
import CloseIcon from '../../../../assets/svg/close-icon'
import Button from '../Button'

export default function AlertModal({ successFullyRegister, setsuccessFullyRegister, navigation }: any) {
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
                        <Text style={styles.text}>Are you sure you want to send an emergency alert? Your trusted contacts will be notified immediately.</Text>
                    </View>
                    <Button
                        title="Yes, Send Alert"
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle} onPress={() => { navigation.navigate('sosAlert'); setsuccessFullyRegister(false) }} />
                    <Button
                        title="Cancel"
                        buttonStyle={styles.outlineButton}
                        textStyle={styles.outlineText} onPress={() => setsuccessFullyRegister(false)} />
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
        paddingBottom: 20,
        paddingRight: 30,
        height: 'auto',
        width: '80%',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 16,
        color: '#514A4F',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 20,
    },
    buttonStyle: {
        width: Platform.OS === 'ios' ? 300 : 250,
        marginTop: 50,
        textAlign: 'center',
        boxShadow: '0px 4px 20px 0px rgba(159, 31, 114, 0.33)',
    },
    textStyle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 500
    },
    outlineButton: {
        width: Platform.OS === 'ios' ? 300 : 250,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#9F1F72',
        backgroundColor: 'transparent',
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 20,
    },
    outlineText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 300
    }
})