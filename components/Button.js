import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import AppIcon from './AppIcon';

const Button = props => (
    <TouchableOpacity onPress={ () => props.onPressHandler() }>
        <View style={ [styles.button, (props.action ? styles.action : null), (props.valid ? styles.valid : null)] }>
            <AppIcon
                name = { props.iconName }
                color = { props.iconColor }
                size = { 22 } />
        </View>
    </TouchableOpacity>
) // Button

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48, height: 48,
        marginLeft: 15,
        borderRadius: 24,
        backgroundColor: '#333333'
    },
    valid: {
        marginLeft: 0,
        backgroundColor: '#02b875'
    },
    action: {
        marginLeft: 0,
        backgroundColor: 'transparent'
    }
})

export default Button;