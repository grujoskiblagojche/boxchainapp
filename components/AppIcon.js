import React from 'react';
import { StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

export default ({ name, color, size, focused, ...props }) => (

    <Icon
        name = { name }
        color = { color ? color : focused ? '#202429' : '#adb5bc' }
        size = { size }
        style = { focused ? styles.icon_active : null } />
)

const styles = StyleSheet.create({
    icon_active: {
        marginBottom: 7
    }
})