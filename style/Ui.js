import { StyleSheet } from 'react-native';

const ui = StyleSheet.create({    
    appHeader: {
        maxHeight: 50,
        marginTop: 40
    },
    appHeader_logo: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    appFooter: {
        minHeight: 90, maxHeight: 90
    },
    appWrite: {
        height: 70
    },
    appKey: {
        height: 42,
        borderBottomWidth: 1,
        borderBottomColor: '#f7f7f7'
    },
    removeKey: {
        width: 48
    },
    appKey_icon: {
        // width: 20, height: 20
        fontSize: 20
    },
    profilePic: {
        width: 100,
        height: 100,
        borderColor: '#333333',
        borderWidth: 3,
        marginRight: 20,
        borderRadius: 50
    },
    message: {
        marginBottom: 15
    },
    messagePicHolder: {
        marginLeft: 15,
        marginRight: 4,
        borderRadius: 23,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .2,
        shadowRadius: 2
    },
    messagePic: {
        width: 42, height: 42,
    },
    // chatContainer: {
    //     backgroundColor: '#f7f7f7'
    // },

    // helpers
    cockpit: { maxHeight: 150 },
    t_15: { marginTop: 15 },
    r_15: { marginRight: 15 },
    b_15: { marginBottom: 15 },
    l_15: { marginLeft: 15 },
    t_30: { marginTop: 30 },
    t_60: { marginTop: 60 }
})

export default ui;