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
        borderWidth: 0,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .1,
        shadowRadius: 10
    },
    input: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16
    },
    input_invalid: {
        shadowColor: '#c9283e',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5
    },
    no_margin: {
        marginBottom: 0
    }
})

export default Input;