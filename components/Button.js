import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import AppIcon from './AppIcon';

const Button = props => (
    <TouchableOpacity onPress={ () => props.onPressHandler() }>
        <View style={ [styles.button, (props.action ? styles.action : null), (props.nav ? styles.arrow_back : null), (props.burn ? styles.burn : null)] }>
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
        borderRadius: 24,
        backgroundColor: '#333333'
    },
    action: {
        marginRight: 15,
        backgroundColor: '#02b875'
    },
    arrow_back: {
        backgroundColor: 'transparent'
    },
    burn: {
        marginLeft: 15,
        backgroundColor: '#eeeeee'
    }
})

export default Button;