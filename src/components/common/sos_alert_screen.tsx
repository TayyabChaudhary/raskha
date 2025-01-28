import { View, Text, Image, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/sos-alert'
import { ArrowsIcon } from '../../../assets/svg/arrow-left'
import { StatusBar } from 'expo-status-bar'
import Button from '../global/Button'
import StopAudioModal from '../global/modal/stop-audio'

export default function SosAlertScreens({ navigation }: any) {
    const [stopAudio, setstopAudio] = useState(false);
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
                    <ArrowsIcon onPress={() => navigation.navigate('sos')} />
                    <Text style={styles.title}>SOS Alert Sent</Text>
                </View>
                <StatusBar style="light" />
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.inputContainer}>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 3 }}>
                        <Image source={require('../../../assets/images/success.png')} />
                    </View>
                    <Text style={styles.title2}>SOS Alert Successfully.</Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>Help is on the way! 🚨</Text>
                    <Text style={{ fontSize: 14, width: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300, textAlign: 'center' }}>Your trusted contacts have been notified, and nearby help centers are being alerted. We're sharing your location to get you the assistance you need, quickly and safely!</Text>
                    <View style={{
                        marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20, paddingTop: 18, width: Platform.OS === 'ios' ? 380 : 300, marginTop: 20,
                        borderRadius: 10, backgroundColor: "#fff"
                    }}>
                        <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 400 }}>Recording... Stay safe!</Text>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 20 }}>
                            <Image source={require('../../../assets/images/record.png')} />
                        </View>
                        <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 5, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>Recording...    02:28</Text>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 20 }}>
                            <Image source={require('../../../assets/images/voice.png')} />
                        </View>
                        <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 10, color: '#514A4F', width: 200, marginLeft: 'auto', marginRight: 'auto', lineHeight: 20, fontWeight: 300 }}>Recording will continue until you stop it manually.</Text>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
                            <Button
                                title="Stop"
                                buttonStyle={styles.buttonStyle}
                                textStyle={styles.textStyle} onPress={() => setstopAudio(true)} />
                        </View>
                    </View>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <View style={styles.card} key={index}>
                            <View style={styles.cardRow}>
                                <View style={styles.leftSide}>
                                    <Image source={require('../../../assets/images/boy.png')} />
                                    <View>
                                        <Text style={{ fontSize: 16 }}>John Doe</Text>
                                        <Text style={{ fontSize: 13, color: '#514A4F' }}>Notified at 12:30 PM</Text>
                                    </View>
                                </View>
                                <View style={styles.leftSide}>
                                    <Image source={require('../../../assets/images/call.png')} />
                                    <Image source={require('../../../assets/images/message.png')} />
                                </View>
                            </View>
                        </View>
                    ))}
                    <View style={{
                        marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20, paddingTop: 18, width: Platform.OS === 'ios' ? 380 : 300, marginTop: 20,
                        borderRadius: 10, backgroundColor: "#fff", padding: 16
                    }}>
                        <Text style={{ fontSize: 16, textAlign: 'left', marginBottom: 10, color: '#9F1F72', lineHeight: 20, fontWeight: 500 }}>My Current Location</Text>
                        <Image source={require('../../../assets/images/map.png')} style={{ width: '100%' }} />

                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
                        <Button
                            title="Cancel SOS"
                            buttonStyle={styles.buttonStyle}
                            textStyle={styles.textStyle} onPress={() => { }} />
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                        <Button
                            title="Retry Notification"
                            buttonStyle={styles.outlineButton}
                            textStyle={styles.outlineText} onPress={() => { }} />
                    </View>
                </ScrollView>
            </View>

            {stopAudio && <StopAudioModal successFullyRegister={stopAudio} setsuccessFullyRegister={setstopAudio} navigation={navigation} />}
        </View>
    )
}