import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#9F1F72',
        borderRadius: 100,
    },
    inputContainer: {
        flexGrow: 1,
        padding: 25,
        paddingTop: 20,
        backgroundColor: '#ECF0F3',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
    // ====== Details Text
    contactContainer: {
        maxWidth: Platform.OS === 'ios' ? 320 : 200,
        marginHorizontal: 'auto',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    relative: {
        position: 'absolute',
        top: 40
    },
   
    circle: {
        width: 170,
        height: 170,
        borderRadius: 150,
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "#9F1F72",
        alignItems: 'center',
        justifyContent: 'center',
    },
    insideCircleWhite: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    insideCircle: {
        width: 120,
        height: 120,
        borderRadius: 150,
        backgroundColor: "#9F1F72",
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 20px rgba(159, 31, 114, 0.31)',
    },
    textSelect: {
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center',
        color: "#fff",
    },
    detail: {
        fontSize: 20,
        fontWeight: 300,
        textAlign: 'center',
        color: "#514A4F",
        marginBottom: 0,
        lineHeight: 28,
    },
    circleContainer: {
        maxWidth: 600,
        marginHorizontal: 'auto',
        paddingTop: 20,
    },
    circleImage: {
        width: '100%',
        height: 400,
    },
    contineButton: {
        width: '100%',
        marginTop: Platform.OS === 'ios' ? width * 0.5 : width * 0.5,
    },
    text: {
        fontSize: 14,
        fontWeight: 300,
        textAlign: 'center',
        color: "#CB0003",
        marginBottom: width * 0.04
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#4CAF50',  // Change to any color you like
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatarText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    buttonStyle: {
        width: '100%',
        boxShadow: '0px 4px 20px 0px rgba(159, 31, 114, 0.33)',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 400,
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
        marginTop: Platform.OS === 'ios' ? width * 0.15 : width * 0.14,
        marginLeft: 0
    },
    title: {
        fontSize: Platform.OS === 'ios' ? width * 0.06 : width * 0.06,
        fontWeight: 400,
        color: "#fff",
    },
    rightFemale: {
        height: 210,
        width: 150,
        top: 20,
        right: 0,
        position: 'absolute',
    },

    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
    },
});
