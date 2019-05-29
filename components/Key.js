import React from 'react';
import { View, Text, Image } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// images
import LockIcon from '../assets/lock.png';

const Key = props => (
    <View style={ [grid.flex_row, grid.flex_row_v_center, ui.appKey] }>
        <Image style={ ui.appKey_icon } source={ LockIcon } />
        <Text style={ [typo.key, ui.l_15] }>{ props.secret }</Text>
    </View>
) // Key

export default Key;