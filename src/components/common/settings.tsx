import React, { useState } from 'react'
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { ArrowProfile, HelpsIcon } from '../../../assets/svg/arrow-left';
import { styles } from '../../styles/home-screen-styles';
import AlertModal from '../global/modal/alert-modal';
import { StyleSheet } from 'react-native';
import FeedbackModal from '../global/modal/feedback-nodal';

const SettingScreen = ({ navigation }: any) => {
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    return (
        <View style={styles.main}>
            <View style={cardStyles.container}>
                <Image
                    source={require('../../../assets/images/left-female.png')} // Replace with your image URL or local image source
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/images/right-female.png')} // Replace with your image URL or local image source
                    style={styles.rightimage}
                />
                <View style={styles.titleContainer}>
                    <ArrowProfile onPress={() => navigation.navigate('emergency')} />
                    <Text style={{ fontSize: 24, color: "#FFF", fontWeight: 600 }}>Setting</Text>
                    <HelpsIcon onPress={() => setShowAlertModal(true)} />
                </View>
                <StatusBar style="light" />
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={cardStyles.cont}>
                    <TouchableOpacity>
                        <View style={cardStyles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image source={require('../../../assets/images/user-icon.png')} width={20} height={20} />
                                    <Text style={{ fontWeight: 400 }}>My Personal Details</Text>
                                </View>
                                <Image source={require('../../../assets/images/arrow-right.png')} width={20} height={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={cardStyles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image source={require('../../../assets/images/users.png')} width={20} height={20} />
                                    <Text style={{ fontWeight: 400 }}>Emergency Contacts</Text>
                                </View>
                                <Image source={require('../../../assets/images/arrow-right.png')} width={20} height={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('sefly')}>
                        <View style={cardStyles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image source={require('../../../assets/images/blub.png')} width={20} height={20} />
                                    <Text style={{ fontWeight: 400 }}>Safety Tips and Advices</Text>
                                </View>
                                <Image source={require('../../../assets/images/arrow-right.png')} width={20} height={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowFeedbackModal(true)}>
                        <View style={cardStyles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image source={require('../../../assets/images/feedback.png')} width={20} height={20} />
                                    <Text style={{ fontWeight: 400 }}>Feedback</Text>
                                </View>
                                <Image source={require('../../../assets/images/arrow-right.png')} width={20} height={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={cardStyles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image source={require('../../../assets/images/share.png')} width={20} height={20} />
                                    <Text style={{ fontWeight: 400 }}>Share App</Text>
                                </View>
                                <Image source={require('../../../assets/images/arrow-right.png')} width={20} height={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={cardStyles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image source={require('../../../assets/images/logout.png')} width={20} height={20} />
                                    <Text style={{ fontWeight: 400 }}>Logout</Text>
                                </View>
                                <Image source={require('../../../assets/images/arrow-right.png')} width={20} height={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {showAlertModal && <AlertModal successFullyRegister={showAlertModal} setsuccessFullyRegister={setShowAlertModal} navigation={navigation} />}
            {showFeedbackModal && <FeedbackModal successFullyRegister={showFeedbackModal} setsuccessFullyRegister={setShowFeedbackModal} navigation={navigation} />}
        </View>
    )
}

export default SettingScreen;


const cardStyles = StyleSheet.create({
    
    container: {
        position: 'relative',
        width: '100%',
        backgroundColor: "#9F1F72",
        height: 200,
        overflow: "hidden",
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#B1B1B1',
        marginBottom: 15
    },
    cont: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: '#ECF0F3',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
})
