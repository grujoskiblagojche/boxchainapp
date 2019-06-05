import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => (
    <View style={ [styles.inputContainer, (props.inChat ? styles.no_margin : ''), !props.valid && props.touched ? styles.input_invalid : null] }>
        <TextInput style={ styles.input } underlineColorAndroid="transparent" { ...props } />
    </View>
) // Input

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        height: 48,
        marginBottom: 20,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#080808',
        backgroundColor: '#0c0c0e',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: .5,
        shadowRadius: 5
    },
    input: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#f7f7f7',
        fontSize: 18
    },
    input_invalid: {
        borderWidth: 1,
        borderColor: '#c9283e'
    },
    no_margin: {
        marginBottom: 0
    }
})

export default Input;