import React from 'react'
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';


import ArrowLeftIcon from '../../../assets/svg/arrow-left';
import Accordion from '../global/Accordion';

const SeflyTips = ({ navigation }: any) => {
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
                    <ArrowLeftIcon onPress={() => navigation.navigate('sos')} />
                    <Text style={styles.title}>Safety Tips and Advices</Text>
                </View>
                <StatusBar style="light" />
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.inputContainer}>
                    <Text style={styles.title2}>Important Tips Regarding women safety</Text>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <View key={index}>
                            <Text style={{ fontSize: 14, marginTop: 10, color: '#514A4F', lineHeight: 24, fontWeight: 300 }}>Lorem ipsum dolor sit ame secte enim a id libero eget volutpat luctus euismod. Sed dictum lectus nisl eget pulvinar.</Text>
                            <View style={{ borderBottomColor: '#666', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 10 }}
                            />
                        </View>
                    ))}
                    <Text style={{ fontSize: 18, marginTop: 10, color: '#CB0003', lineHeight: 24, fontWeight: 400 }}>Conclusion:</Text>
                    <Text style={{ fontSize: 14, marginTop: 10, color: '#514A4F', lineHeight: 24, fontWeight: 300, textAlign: 'left' }}>Lorem ipsum dolor sit ame secte enim a id libero eget volutpat luctus euismod. Sed dictum lectus nisl eget pulvinar.</Text>
                </ScrollView>
            </View>
        </View>
    )
}

export default SeflyTips;

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
    contactImage: {
        width: 180,
        height: 180,
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
        fontSize: 20,
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
    title2: {
        fontSize: 28,
        fontWeight: 400,
        color: '#E98400',
        marginTop: 16,
        lineHeight: 32
    },
    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
