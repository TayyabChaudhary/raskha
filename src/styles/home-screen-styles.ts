import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        paddingTop: 60
    },
    title2: {
        fontSize: 22,
        fontWeight: 400,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#514A4F',
        fontFamily: 'Raleway_500Medium'
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
        height: 240,
        overflow: "hidden",
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        width: Platform.OS === 'ios' ? 240 : 170,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    para: {
        fontSize: Platform.OS === 'ios' ? 14 : 15,
        fontWeight: 300,
        textAlign: 'center',
        color: '#514A4F',
        lineHeight: 20,
        marginTop: 6
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
    otpImage: {
        width: 260,
        height: Platform.OS === 'ios' ? 290 : 160,
        objectFit: 'contain'
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
    rightFemale: {
        height: 210,
        width: 150,
        top: 20,
        right: 0,
        position: 'absolute',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        position: 'relative',
    },
    editOption: {
        position: 'absolute',
        bottom: -3,
        right: -6,
        zIndex: 10,
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        borderRadius: 100,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    imageGirl: {
        objectFit: 'contain',
        width: 64,
        height: 64,
        borderRadius: 100
    },
    userName: {
        color: '#fff',
        fontSize: Platform.OS === 'ios' ? 18 : 20,
        fontWeight: Platform.OS === 'ios' ? 700 : 700,
    },
    userEmail: {
        color: '#fff',
        fontSize: Platform.OS === 'ios' ? 14 : 14,
        fontWeight: Platform.OS === 'ios' ? 400 : 400,
    },
    redCircle: {
        width: 242,
        height: 242,
        borderRadius: 300,
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#9F1F72',
    },

    shadowCircle: {
        width: 220,
        height: 220,
        borderRadius: 300,
        backgroundColor: "rgba(227, 230, 236, 1)",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(209, 217, 230, 0.67)',
        shadowOffset: { width: 15.32, height: 27.57 },
        shadowOpacity: 0.67,
        shadowRadius: 31.15,
        // Outer Shadow (Android)
        elevation: 15,
        display: 'flex',
    },

    help: {
        fontSize: 53,
        fontWeight: 600,
        color: '#9F1F72',
        fontFamily: 'Raleway_500Medium'
    },

    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

