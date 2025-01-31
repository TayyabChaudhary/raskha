import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Platform, View, Text, ScrollView, Animated } from 'react-native';

import { StatusBar } from 'expo-status-bar';


import ArrowLeftIcon from '../../../assets/svg/arrow-left';
import Accordion from '../global/Accordion';

const InstructionScreen = ({ navigation }: any) => {
    const translateY = useRef(new Animated.Value(0)).current;
    const scrollPosition = useRef(0);
    const [statusBarStyle, setStatusBarStyle] = useState<any>('light');
  
    const handleScroll = (event: any) => {
      const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
      scrollPosition.current = contentOffset.y;
  
      if (contentOffset.y > 250) {
        setStatusBarStyle('dark');
      } else {
        setStatusBarStyle('light');
      }
  
      if (contentOffset.y + layoutMeasurement.height >= contentSize.height - 50) {
        Animated.timing(translateY, {
          toValue: -350,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
  
      if (contentOffset.y <= 10) {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
  
    return (
      <Animated.View style={[styles.main, { transform: [{ translateY }] }]}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/left-female.png')}
            style={styles.image}
          />
          <Image
            source={require('../../../assets/images/right-female.png')}
            style={styles.rightimage}
          />
          <View style={styles.titleContainer}>
            <ArrowLeftIcon onPress={() => navigation.navigate('MainHome')} />
            <Text style={styles.title}>Instructions to Use</Text>
          </View>
          <StatusBar style={statusBarStyle} />
        </View>
        <View style={styles.content}>
          <ScrollView
            contentContainerStyle={styles.inputContainer}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <Text style={styles.title2}>How to Use RakshaSutra?</Text>
            <Text style={{ fontSize: 16, marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>Follow these simple steps to get started:</Text>
            <Text style={{ fontSize: 14, width: 300, marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300, textAlign: 'left' }}>{`•`} Set up your emergency contacts by tapping the <Text style={{ fontWeight: 400, fontStyle: 'italic' }}>'Select Multiple Contacts'</Text> text.</Text>
            <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20 }}>
              <Image source={require('../../../assets/images/selet.png')} style={styles.contactImage} />
            </View>
            <Text style={{ fontSize: 14, width: 300, marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300, textAlign: 'left' }}>{`•`} Use the <Text style={{ fontWeight: 400, fontStyle: 'italic' }}>'Help Now'</Text> button in case of emergencies.</Text>
            <Text style={{ fontSize: 14, width: 300, marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300, textAlign: 'left' }}>{`•`} Edit your profile anytime for updated details.</Text>
            <Text style={{ fontSize: 14, width: 300, marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300, textAlign: 'left' }}>{`•`} Manage notification preferences in settings.</Text>
            <Text style={{ fontSize: 14, width: 300, marginTop: 10, color: '#514A4F', lineHeight: 20, fontWeight: 300, textAlign: 'left' }}>{`•`}  <Text style={{ fontWeight: 400, fontStyle: 'italic' }}>Can't open the app? No problem!</Text>  Quickly press the volume down button three times, and your emergency alert will be instantly sent to your trusted contacts.</Text>
            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <Image source={require('../../../assets/images/faq.png')} />
            </View>
            <Text style={{ fontSize: 22, marginVertical: 20, color: '#514A4F', lineHeight: 28, fontWeight: 700 }}>FAQS</Text>
            <Accordion title="Lorem ipsum dolor sit amet?">
              <Text style={{ fontSize: 14, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>Lorem ipsum dolor sit a consectetu nt  abitant viverra molestie nec morbi sed interdum sollicitudinnec venenatis.</Text>
            </Accordion>
            <Accordion title="Lorem ipsum dolor sit amet?">
            <Text style={{ fontSize: 14, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>Lorem ipsum dolor sit a consectetu nt  abitant viverra molestie nec morbi sed interdum sollicitudinnec venenatis.</Text>
            </Accordion>
            <Accordion title="Lorem ipsum dolor sit amet?">
            <Text style={{ fontSize: 14, color: '#514A4F', lineHeight: 20, fontWeight: 300 }}>Lorem ipsum dolor sit a consectetu nt  abitant viverra molestie nec morbi sed interdum sollicitudinnec venenatis.</Text>
            </Accordion>
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
  
  export default InstructionScreen;

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
        overflow: 'hidden',
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
        width: 250,
        height: 250,
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
    title2: {
        fontSize: 22,
        fontWeight: 400,
        color: '#514A4F',
        marginTop: 16
    },
    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
