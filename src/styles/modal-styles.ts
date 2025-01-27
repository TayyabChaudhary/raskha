import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
    main: {
        backgroundColor: '#9F1F72',
        borderRadius: 100,
    },
    imageBg: {
        width: 130,
        height: 130,
        borderRadius: 100,
        backgroundColor: '#ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        boxShadow: '0px 2.84px 13.22px 0px rgba(159, 31, 114, 0.1)'

    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    renove: {
        borderWidth: 1,
        borderColor: '#9F1F72',
        backgroundColor: 'transparent',
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 3,
        color: '#514A4F',
        width: 280,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 40,
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 20,
        height: 350,
        width: '80%',
        alignItems: 'center',
        position: 'relative'
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
    confirmButton: {
        marginTop: 20,
        backgroundColor: '#9F1F72',
        paddingVertical: 14,
        borderRadius: 50,
        width: '100%',
        boxShadow: '0px 4px 20px 0px rgba(159, 31, 114, 0.33)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    confirmText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    contactItem: {
        paddingVertical: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contactCard: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
        boxShadow: '0px 2.84px 13.22px 0px rgba(159, 31, 114, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerModalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 40,
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 20,
        width: '80%',
        alignItems: 'center',
        position: 'relative'
    },
    OutlineButton: {
        marginTop: 20,
        backgroundColor: '#fff',
        paddingVertical: 14,
        borderRadius: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderWidth: 1,
        borderColor: '#9F1F72'
    },
    outlineText: {
        color: '#514A4F',
        textAlign: 'center',
        fontSize: 16,
    },
});