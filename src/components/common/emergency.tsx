import React, { useState } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';


import * as Contacts from 'expo-contacts';
import { styles } from '../../styles/emergency-contact.styles';
import ArrowLeftIcon from '../../../assets/svg/arrow-left';
import LargeCircle from '../../../assets/svg/lar-circle';
import { Addstyles } from '../../styles/add-icon';
import AddIcon from '../../../assets/svg/add';
import Button from '../global/Button';
import { modalStyles } from '../../styles/modal-styles';
import CloseIcon from '../../../assets/svg/close-icon';
import RegistrationSuccessFullyModal from '../global/register-success-modal';
import EmergencyContactModal from '../global/modal/emergency-modal';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Avatar Component: Displays the first letter of a name inside a circle
const Avatar = ({ name, customStyles = {} }: { name: string; customStyles?: any }) => {
    const firstLetter = name ? name.charAt(0).toUpperCase() : '';
    return (
        <View style={[styles.avatar, customStyles]}>
            <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>
    );
};

const EmergencyScreen = ({ navigation }: any) => {
    const router = useRouter();
    const [hasSelectedContact, setHasSelectedContact] = useState<any>({});
    const [isModalVisible, setModalVisible] = useState(false);
    const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
    const [selectedMultipleContacts, setSelectedMultipleContacts] = useState<Contacts.Contact[]>([]);
    const [successFullyRegister, setsuccessFullyRegister] = useState(false);
    const [errorText, seterrorText] = useState(false);
    const [emergencyContact, setemergencyContact] = useState(false);
    const [selectedContact, setSelectedContact] = useState<{
        name: string;
        phoneNumber: string;
    } | null>(null);
    // Handle single contact selection using native picker
    const handleCircleClick = async (circleId: number) => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'We need access to your contacts to proceed.');
            return;
        }

        try {
            const contact = await Contacts.presentContactPickerAsync();
            if (contact) {
                setHasSelectedContact((prev: any) => ({
                    ...prev,
                    [circleId]: {
                        name: contact.name,
                        phoneNumber: contact.phoneNumbers ? contact.phoneNumbers[0]?.number : '',
                    },
                }));
            }
        } catch (error) {
            console.error('Error selecting contact:', error);
        }
    };

    // Handle multiple contact selection via modal
    const handleMultipleContactsClick = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'We need access to your contacts to proceed.');
            return;
        }

        const selectedContacts: Contacts.Contact[] = [];
        let continueSelecting = true;

        while (continueSelecting && selectedContacts.length < 5) {
            try {
                const contact = await Contacts.presentContactPickerAsync();
                if (contact) {
                    // Avoid adding duplicate contacts
                    if (!selectedContacts.some((c) => c.id === contact.id)) {
                        selectedContacts.push(contact);
                    } else {
                        Alert.alert('Duplicate Contact', `${contact.name} is already selected.`);
                    }
                } else {
                    // User canceled the picker
                    continueSelecting = false;
                }

                if (selectedContacts.length < 5) {
                    continueSelecting = await new Promise((resolve) => {
                        Alert.alert(
                            'Select Another Contact?',
                            'Do you want to select another contact?',
                            [
                                { text: 'No', onPress: () => resolve(false) },
                                { text: 'Yes', onPress: () => resolve(true) },
                            ]
                        );
                    });
                }
            } catch (error) {
                console.error('Error selecting contact:', error);
                continueSelecting = false;
            }
        }

        // Update the circles with the selected contacts
        selectedContacts.forEach((contact, index) => {
            const circleId = index + 1;
            setHasSelectedContact((prev: any) => ({
                ...prev,
                [circleId]: {
                    name: contact.name,
                    phoneNumber: contact.phoneNumbers?.[0]?.number,
                },
            }));
        });
    };


    const handleContactSelect = (contact: Contacts.Contact) => {
        if (selectedMultipleContacts.some((c) => c.id === contact.id)) {
            setSelectedMultipleContacts((prev) =>
                prev.filter((c) => c.id !== contact.id)
            );
        } else {
            setSelectedMultipleContacts((prev) => [...prev, contact]);
        }
    };

    const handleConfirmMultipleContacts = () => {
        const selectedContactsToAdd = selectedMultipleContacts.slice(0, 5);

        selectedContactsToAdd.forEach((contact, index) => {
            const circleId = index + 1;
            setHasSelectedContact((prev: any) => ({
                ...prev,
                [circleId]: {
                    name: contact.name,
                    phoneNumber: contact.phoneNumbers?.[0]?.number,
                },
            }));
        });

        setModalVisible(false);
    };

    return (
        <SafeAreaProvider style={styles.main}>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/left-female.png')} style={styles.image} />
                <Image source={require('../../..//assets/images/right-female.png')} style={styles.rightimage} />
                <View style={styles.titleContainer}>
                    <ArrowLeftIcon onPress={() => navigation.navigate('complete')} />
                    <Text style={styles.title}>Emergency Contacts</Text>
                </View>
                <StatusBar style="light" />
            </View>
            <ScrollView style={styles.inputContainer} scrollEnabled={false}>
                <View style={{ flex: 2.4 }}>
                    <View style={styles.contactContainer}>
                        <Text style={styles.detail}>
                            Select up to 5 trusted contacts to notify in an emergency. You can update them anytime.
                        </Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.center}>
                            <LargeCircle />
                            {[1, 2, 3, 4, 5].map((circleId) => (
                                <TouchableOpacity
                                    key={circleId}
                                    style={Addstyles[`cirlce${circleId}`]}
                                    onPress={() => {
                                        if (hasSelectedContact[circleId]) {

                                            // Alert.alert(
                                            //     hasSelectedContact[circleId].name,
                                            //     `Phone: ${hasSelectedContact[circleId].phoneNumber}`,
                                            //     [{ text: 'OK' }]
                                            // );
                                            if (hasSelectedContact[circleId]) {
                                                setSelectedContact({
                                                    name: hasSelectedContact[circleId].name,
                                                    phoneNumber: hasSelectedContact[circleId].phoneNumber,
                                                });
                                                setemergencyContact(true);
                                            }

                                        } else {
                                            handleCircleClick(circleId);
                                        }
                                    }}
                                >
                                    {hasSelectedContact[circleId] ? (
                                        <Avatar name={hasSelectedContact[circleId].name} />
                                    ) : (
                                        <AddIcon />
                                    )}
                                </TouchableOpacity>
                            ))}
                            <View style={styles.relative}>
                                <View style={styles.circle}>
                                    <View style={styles.insideCircleWhite}>
                                        <View style={styles.insideCircle}>
                                            <Text style={styles.textSelect} onPress={handleMultipleContactsClick}>
                                                Select Multiple Contacts
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                  
                    <View style={{ flex: 2 }}>
                    <View style={styles.contineButton}>
                        {errorText && (
                            <Text style={styles.text}>
                                Please select at least one contact to continue.
                            </Text>
                        )}
                        <Button
                            title={
                                Object.keys(hasSelectedContact).length > 0
                                    ? 'Save Changes'
                                    : 'Continue'
                            }
                            onPress={() => {
                                if (Object.keys(hasSelectedContact).length === 0) {
                                    seterrorText(true);
                                } else {
                                    // setsuccessFullyRegister(true);
                                    navigation.navigate('sos');
                                    seterrorText(false);
                                }
                            }}
                            buttonStyle={styles.buttonStyle}
                            textStyle={styles.textStyle}
                        />
                    </View>
                    </View>
                </View>
            </ScrollView>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalStyles.modalBackground}>
                    <View style={modalStyles.modalContent}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={modalStyles.closeIcon}
                            onPress={() => setModalVisible(false)}
                        >
                            <CloseIcon />
                        </TouchableOpacity>
                        <ScrollView>
                            {contacts.map((contact) => (
                                <TouchableOpacity
                                    key={contact.id}
                                    style={modalStyles.contactItem}
                                    onPress={() => handleContactSelect(contact)}
                                >
                                    <Text
                                        style={{
                                            fontWeight: selectedMultipleContacts.some((c) => c.id === contact.id) ? 'bold' : 'normal',
                                            marginVertical: 8,
                                            fontSize: 14,
                                        }}
                                    >
                                        <EmergencyContactModal />
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <TouchableOpacity
                            style={modalStyles.confirmButton}
                            onPress={handleConfirmMultipleContacts}
                        >
                            <Text style={modalStyles.confirmText}>Confirm Selection</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <RegistrationSuccessFullyModal
                successFullyRegister={successFullyRegister}
                setsuccessFullyRegister={setsuccessFullyRegister}
            />
            <Modal
                visible={emergencyContact}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setemergencyContact(false)}
            >
                <View style={modalStyles.modalBackground}>
                    <View style={modalStyles.modalContent}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={modalStyles.closeIcon}
                            onPress={() => setemergencyContact(false)}
                        >
                            <CloseIcon />
                        </TouchableOpacity>
                        <ScrollView>
                            <View style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                <View style={modalStyles.contactCard}>
                                    {selectedContact ? (
                                        <>
                                            <Avatar name={selectedContact.name} />
                                            <Text style={{ fontSize: 14, color: '#fff' }}>
                                                {selectedContact.name}
                                            </Text>
                                        </>
                                    ) : (
                                        <Text>No contact selected</Text>
                                    )}
                                </View>

                            </View>
                        </ScrollView>
                        {selectedContact && (
                            <View style={{ marginTop: 10 }}> <Text style={{ fontSize: 14, textAlign: 'center', color: '#514A4F', lineHeight: 20 }}>{selectedContact.phoneNumber}</Text></View>
                        )}
                        <TouchableOpacity
                            style={modalStyles.confirmButton}
                            onPress={() => { }}
                        >
                            <Image source={require('../../../assets/images/user-white.png')} />
                            <Text style={modalStyles.confirmText}>Delete Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={modalStyles.OutlineButton}
                            onPress={() => { }}
                        >
                            <Image source={require('../../../assets/images/remove.png')} />
                            <Text style={modalStyles.outlineText}>Remove Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaProvider>
    );
};

export default EmergencyScreen;
