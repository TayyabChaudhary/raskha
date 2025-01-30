import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

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
        overflow: 'hidden',
        padding: 2,
    },
    buttonStyle: {
        width: Platform.OS === 'ios' ? 300 : 250,
        backgroundColor: '#CB0003',
        marginTop: 5,
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
        marginTop: 10,
    }, 
    outlineText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 300
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
        fontSize: Platform.OS === 'ios' ? width * 0.06 : width * 0.07,
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
        fontSize: 20,
        fontWeight: 500,
        color: '#514A4F',
        marginTop: 16,
        textAlign: 'center'
    },
    // ====== row
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        width: Platform.OS === 'ios' ? width * 0.9 : width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        marginTop: 14,
        borderWidth: 1,
        borderColor: '#B1B1B1',
    },
    cardRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }
});
