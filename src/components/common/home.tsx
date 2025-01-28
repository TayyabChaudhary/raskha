import React, { useState } from 'react'
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { ArrowLeftProfile, HelpIcon } from '../../../assets/svg/arrow-left';
import EditIcon from '../../../assets/svg/edit-icon';
import { styles } from '../../styles/home-screen-styles';
import AlertModal from '../global/modal/alert-modal';
import { Raleway_500Medium } from "@expo-google-fonts/raleway"

const MainHomeScreen = ({ navigation }: any) => {
    const [showAlertModal, setShowAlertModal] = useState(false);
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
                    <ArrowLeftProfile onPress={() => navigation.navigate('emergency')} />
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                        <View style={styles.avatar}>
                            <Image source={require('../../../assets/images/girl.png')} style={styles.imageGirl} />
                            <View style={styles.editOption}>
                                <TouchableOpacity onPress={() => navigation.navigate('editProfile')}>
                                    <EditIcon />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.userName}>Isha Singh</Text>
                        <Text style={styles.userEmail}>ishasingh864@gmail.com</Text>
                    </View>
                    <HelpIcon onPress={() => { }} />
                </View>
                <StatusBar style="light" />
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.inputContainer}>
                    <Text style={styles.title2}>Are you in emergency?</Text>
                    <View style={styles.container2}>
                        <Text style={styles.para}>Press on the SOS button below and help will reach you shortly.</Text>
                    </View>
                    <TouchableOpacity onPress={() => setShowAlertModal(true)}>
                        <View style={styles.imageContainer}>
                            <View style={styles.redCircle}>
                                <View style={styles.shadowCircle}>
                                    <Text style={styles.help}>Help</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {showAlertModal && <AlertModal successFullyRegister={showAlertModal} setsuccessFullyRegister={setShowAlertModal} navigation={navigation} />}
        </View>
    )
}

export default MainHomeScreen;
